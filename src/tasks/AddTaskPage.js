import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
    BackButton,
    Dropdown,
} from '../ui';

const typeOptions = [
    'story',
    'bug'
];

export const AddTaskPage = () => {
    const [name, setName] = useState('');
    const [type, setType] = useState(typeOptions[0]);
    const [userDate, setUserDate] = useState();
    const [tags, setTags] = useState([]);
    const [days, setDays] = useState();
    const [hours, setHours] = useState();
    const [mins, setMins] = useState();

    const history = useHistory();

    const addToTasks = async () => {
        const time = `${days ? days : 0}d ${hours ? hours : 0}h ${mins ? mins : 0}m`;
        const currentDate = new Date();
        const date = userDate ? userDate 
            : `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;
        const newTask = { name: name.toLowerCase(), type, time, date, tags };
        await fetch('/tasks', {
            method: 'post',
            body: JSON.stringify(newTask),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        history.push('/');
    };

    return (
        <div className="page">
            <BackButton />
            <div className="centered-container">
                <h1>Add Task</h1>
                <input
                    type="text"
                    placeholder="Name"
                    className="space-after space-before full-width"
                    value={name}
                    onChange={e => setName(e.target.value)} />
                <Dropdown
                    className="space-before full-width"
                    onChange={e => setType(e.target.value)}
                    options={typeOptions} />
                <div className='columns-flex'>
                    <div className='column'>
                        <input
                            type="number"
                            placeholder="Days"
                            className="space-before full-width"
                            value={days}
                            onChange={e => setDays(e.target.value)} />
                    </div>
                    <div className='column'>
                        <input
                            type="number"
                            placeholder="Hours"
                            className="space-before full-width"
                            value={hours}
                            onChange={e => setHours(e.target.value)} />
                    </div>
                    <div className='column'>
                        <input
                            type="number"
                            placeholder="Mins"
                            className="space-before full-width"
                            value={mins}
                            onChange={e => setMins(e.target.value)} />
                    </div>
                    
                </div>
                <input
                    type="date"
                    placeholder="Enter task name here"
                    className="space-before full-width"
                    value={userDate}
                    onChange={e => setUserDate(e.target.value)} />
                <input
                    type="text"
                    placeholder="Enter task name here"
                    className="space-before full-width"
                    value={tags}
                    onChange={e => setTags(e.target.value)} />
                <button
                    className="space-before full-width"
                    onClick={addToTasks}
                >Add</button>
            </div>
        </div>
    );
}