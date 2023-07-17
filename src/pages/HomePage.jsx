import * as React from 'react';
import { useState, useEffect } from 'react';
import Icon from '@mui/material/Icon';
import Task from '../comps/Task';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import 'material-icons/iconfont/material-icons.css';
import '../styles/HomePage.css';

const HomePage = () => {
  const [taskFound, setTaskFound] = useState();
  const [createTask, setCreateTask] = useState();

  //variables for task updating and creation
  const [taskName, setTaskName] = useState('');
  const [taskDesc, setTaskDesc] = useState('');
  const [taskPriority, setTaskPriority] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [taskLocation, setTaskLocation] = useState('');

  useEffect(() => {
    setTaskFound(false);
    setCreateTask(false);
  }, []);

  const newTask = () => {
    setTaskFound(true);
    const task = new Task(
      taskName, 
      taskDesc, 
      taskPriority, 
      taskDate, 
      taskLocation
    );
    const taskElement = task.returnTask();
    const taskContainer = document.querySelector('.taskContainer');
    taskContainer.appendChild(taskElement);
  };

  const toggleTaskCreate = (event) => {
    const clickedEvent = event.target.innerHTML;
    if(clickedEvent === 'add_circle') {
      newTask();
    }
    setCreateTask(createTask ? false : true);
  }

  const handleInputChange = (event, setter) => {
    setter(event.target.value);
  };
 
  return (
    <>
      {createTask && 
        <form className='popup' id='taskCreate'>
          <div className='popupDiv taskBar'>
            <DeleteForeverIcon
              onClick={toggleTaskCreate}
              sx={{
                margin: '0.5rem',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'scale(1.2)',
                }
              }} 
            />
            <h1>New Task</h1>
            <Icon
              onClick={toggleTaskCreate}
              sx={{
              margin: '0.5rem',
              cursor: 'pointer',
              '&:hover': {
                transform: 'scale(1.2)',
              }
            }}>
              add_circle
            </Icon>
          </div>
          <div className='popupDiv'>
            <input 
              type='text'
              value={taskName}
              onChange={(event) => handleInputChange(event, setTaskName)}
              placeholder='Enter Task Name'
            />
          </div>
          <div className='popupDiv'>
            <select
              type='text'
              value={taskPriority}
              onChange={(event) => handleInputChange(event, setTaskPriority)}
              placeholder='Enter Task Name'
            >
              <option value='high'>high</option>
              <option value='medium'>medium</option>
              <option value='low'>low</option>
            </select>
          </div>
          <div className='popupDiv'>
            <input 
              type='date'
              value={taskDate}
              onChange={(event) => handleInputChange(event, setTaskDate)}
              placeholder='mm-dd-yyyy'
            />
          </div>
          <div className='popupDiv'>
            <input 
              type='text'
              value={taskLocation}
              onChange={(event) => handleInputChange(event, setTaskLocation)}
              placeholder='Enter Task Location'
            />
          </div>
          <div className='popupDiv taskDesc'>
            <input 
              type='text'
              value={taskDesc}
              onChange={(event) => handleInputChange(event, setTaskDesc)}
              placeholder='Enter Task Description'
            />
          </div>
        </form>
      }
      <nav id='home-nav'>
        <li onClick={toggleTaskCreate}>NEW</li>
      </nav>
      {taskFound && <section className='taskSections'>
        <strong>task name</strong>
        <strong>task description</strong>
        <strong>high priority</strong>
        <strong>completion date</strong>
        <strong>task location</strong>
      </section>}
      <section className='taskContainer'></section>
    </>
  );
}

export default HomePage;