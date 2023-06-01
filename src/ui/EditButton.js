import React from 'react';

export const EditButton = ({ onClick }) => (
    <div className="small-item-button">
        <span className="small-item-button-element" onClick={onClick}>...</span>
    </div>
);