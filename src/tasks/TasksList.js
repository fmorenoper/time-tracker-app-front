import React from 'react';
import { Link } from 'react-router-dom';
import { TasksListItem } from './TasksListItem';

export const TasksList = ({ tasks, isLoading, setTasks }) => {
    
    const onDeleteTask = async (name) => {
        const response = await fetch(`/tasks/${name}`, { method: 'delete' });
        const updatedTasks = await response.json();
        setTasks(updatedTasks);
    }

    return (
        <div className="list-container">
            <h1>Task List</h1>
            {isLoading
                ? <p>Loading...</p>
                : tasks.map(task => (
                    <TasksListItem
                        key={task.name}
                        task={task}
                        onDelete={onDeleteTask} />
                ))}
            <Link to='/add-task'>
                <button className="space-before">+ Add Task</button>
            </Link>
        </div>
    );
}