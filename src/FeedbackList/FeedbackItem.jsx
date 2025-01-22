import React from 'react';

function FeedbackItem({ emoji, message, onSelect }) {
    return (
        <span onClick={() => onSelect(emoji, message)} style={{ fontSize: '4em', margin: '10px', cursor: 'pointer' }}>
            {emoji}
        </span>
    );
}

export default FeedbackItem;
