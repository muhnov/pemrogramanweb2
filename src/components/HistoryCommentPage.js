// src/components/HistoryCommentPage.js
import React from 'react';
import '../css/HistoryComment.css';

function HistoryCommentPage() {
    const imageSrc = "https://example.com/path/to/image.jpg"; // Replace with actual image URL
    const comments = [
        { author: 'User1', text: 'This is a great photo!', date: '2024-11-10' },
        { author: 'User2', text: 'Amazing colors and composition.', date: '2024-11-11' },
        { author: 'User3', text: 'Looks beautiful!', date: '2024-11-12' },
    ];

    return (
        <div className="history-comment-container">
            <div className="image-section">
                <img src={imageSrc} alt="Commented" className="history-image" />
            </div>
            <div className="comment-history-section">
                <h2>Comment History</h2>
                <div className="comment-list">
                    {comments.map((comment, index) => (
                        <div key={index} className="comment-item">
                            <p className="comment-author">{comment.author}</p>
                            <p className="comment-text">{comment.text}</p>
                            <p className="comment-date">{comment.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HistoryCommentPage;
