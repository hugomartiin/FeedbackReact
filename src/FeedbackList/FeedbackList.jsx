import React from 'react';
import FeedbackItem from './FeedbackItem';

function FeedbackList({ onFeedbackSelected }) {

    const emojis = [
        { emoji: '😁', message: 'Happy' },
        { emoji: '😐', message: 'Neutral' },
        { emoji: '😢', message: 'Sad' },
        { emoji: '🤔', message: 'Still Thinking' },
    ];

    return (
        <div className='text-center mt-3'>
            {emojis.map((emoji, index) => (
                <FeedbackItem
                    key={index}
                    emoji={emoji.emoji}
                    message={emoji.message}
                    onSelect={onFeedbackSelected}
                />
            ))}
        </div>
    );
};

export default FeedbackList;