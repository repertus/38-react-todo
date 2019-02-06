import {ADD_TASK, DELETE_TASK, GET_TASKS, UPDATE_TASK} from './types';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4000/api'
});

const addTaskAsync = task => ({
  type: ADD_TASK,
  payload: {
    _id: task._id,
    text: task.text,
    priority: task.priority,
    category: task.category,
    complete: false
  }
});

export const addTask = task => {
  return dispatch => {
    instance.post('/todos', task)
      .then(response => {
        dispatch(addTaskAsync(response.data));
      })
      .catch(error => {
        throw(error);
      });
  }
};

const deleteTaskAsync = id => ({
  type: DELETE_TASK,
  payload: {
    id
  }
});

export const deleteTask = id => {
  return dispatch => {
    instance.delete('/todos/' + id)
      .then(response => {
        dispatch(deleteTaskAsync(response.data));
      })
      .catch(error => {
        throw(error);
      });
  }
};

const getTasksAsync = tasks => ({
  type: GET_TASKS,
  payload: tasks
});

export const getTasks = () => {
  return dispatch => {
    instance.get('/todos')
      .then(response => {
          dispatch(getTasksAsync(response.data));
      })
      .catch(error => {
          throw(error);
      });
  }
}

const updateTaskAsync = task => ({
  type: UPDATE_TASK,
  payload: task
})

export const updateTask = task => {
  return dispatch => {
    instance.put('todos/' + task._id, task)
      .then(response => {
        dispatch(updateTaskAsync(response.data));
      })
      .catch(error => {
        throw(error);
      });
  }
}