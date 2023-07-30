import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackForm from './components/FeedbackForm';
import { FeedbackProvider } from './context/FeedbackContext';
import FeedbackStats from './components/FeedbackStats';

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
              </>
            }
          ></Route>
        </Routes>
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
