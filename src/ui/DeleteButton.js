import React from 'react';

export const DeleteButton = ({ onClick }) => (
    <div className="small-item-button">
        <span className="small-item-button-element" onClick={onClick}>x</span>
    </div>
);