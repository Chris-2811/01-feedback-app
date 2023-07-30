import React, { useState } from 'react';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import FeedbackItem from './FeedbackItem';
import Spinner from './shared/Spinner';

function FeedbackList() {
  const { feedback, isLoading } = useContext(FeedbackContext);

  if(!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No Feedback yet</p>
  }


  return isLoading ? (
    <Spinner />
  ) : (
    <ul className='feedback-list'>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default FeedbackList;
