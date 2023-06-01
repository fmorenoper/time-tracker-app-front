import React from 'react';
import { DeleteButton, EditButton } from '../ui';

export const TasksListItem = ({ task, onDelete }) => {
    return (
        <div className="list-item">
            <h3>{task.name}</h3>
            <p>{task.type} || {task.time} || {task.date}</p>
            <div className="right-action">
                <EditButton onClick={() => onDelete(task.name)} />
                <DeleteButton onClick={() => onDelete(task.name)} />
            </div>
        </div>
    );
}