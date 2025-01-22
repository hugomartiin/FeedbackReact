import { useState } from 'react'
import FeedbackList from './FeedbackList/FeedbackList';
import SelectedFeedbackDisplay from './SelectedFeedbackDisplay/SelectedFeedbackDisplay';
function App() {

  const [selectedFeedback, setSelectedFeedback] = useState({ emoji: null, message: '' });

  const handleFeedbackSelect = (emoji, message) => {
    setSelectedFeedback({ emoji, message });
  }

  const resetFeedback = () => {
    setSelectedFeedback({ emoji: null, message: '' });
  };

  return (
    <div className='App text-center'>
      <h1 className='text-center display-2 fw-bold'>Give your feedback</h1>

      <FeedbackList onFeedbackSelected={handleFeedbackSelect} feedback={selectedFeedback} />
      <SelectedFeedbackDisplay feedback={selectedFeedback} />

      <button onClick={resetFeedback} className='btn btn-light mt-4'>Reset Feedback</button>
    </div>
  )
}

export default App
