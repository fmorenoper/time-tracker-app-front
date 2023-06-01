import { useState, useEffect } from 'react';

export const useTasks = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [tasks, setTasks] = useState([]);

    const loadTasks = async () => {
        setIsLoading(true);
        const response = await fetch('/tasks');
        const tasks = await response.json();
        setTasks(tasks);
        setIsLoading(false);
    }

    useEffect(() => {
        loadTasks();
    }, []);

    return { isLoading, tasks, setTasks };
}