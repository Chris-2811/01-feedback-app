import { createContext, useState, useEffect } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchFeedback();
  }, []);

  // Fetch feedback
  async function fetchFeedback() {
    const response = await fetch(
      'http://localhost:5000/feedback?_sort=id&_order=desc'
    );
    const data = await response.json();

    setFeedback(data);
    setIsLoading(false)
  }

  // Add Feedback
  async function addFeedback(newFeedback) {
    const response = await fetch('http://localhost:5000/feedback', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();

    setFeedback([data, ...feedback]);

  }

  // Delete feedback
  async function deleteFeedback(id) {
    if (window.confirm('Are your sure you want to delete?')) {
      await fetch(`http://localhost:5000/feedback/${id}`, {
        method: 'DELETE',
      });

      setFeedback(feedback.filter((item) => id !== item.id));
    }
  }

  // Update feedback
  async function updateFeedback(id, updItem) {
    const response = await fetch(`http://localhost:5000/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updItem),
    });

    const data = await response.json();

    setFeedback(feedback.map((item) => (item.id === id ? data : item)))

    setFeedbackEdit({
        item: {},
        edit: false,
      })
  }

  // Set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item: item,
      edit: true,
    })
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
        setIsLoading,
        addFeedback,
        deleteFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
