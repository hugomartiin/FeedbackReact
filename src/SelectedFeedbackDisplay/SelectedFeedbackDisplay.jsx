import React from 'react';

function SelectedFeedbackDisplay({ feedback }) {
    return (
        <div className='text-center mt-3'>
            {feedback.emoji ? (
                <h3>Your Feedback: {feedback.emoji} - "{feedback.message}"</h3>
            ) : (
                <h3>No feedback selected yet.</h3>
            )}
        </div>
    );
}

export default SelectedFeedbackDisplay;
