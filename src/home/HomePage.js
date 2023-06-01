import React from 'react';
import { TasksList, useTasks, downloadTasks } from '../tasks';

export const HomePage = () => {
    const { tasks, isLoading: isLoadingTasks, setTasks } = useTasks();
    
    return (
        <div className="page-container">
            <div className="column">
                <TasksList
                    isLoading={isLoadingTasks}
                    tasks={tasks}
                    setTasks={setTasks} />
                <button
                    className="button-wide list-container full-width"
                    onClick={downloadTasks}
                >Download</button>

            </div>
        </div>
    );
}