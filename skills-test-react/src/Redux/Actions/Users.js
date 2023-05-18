import {
    ADD_USER,
    DELETE_USER,
  } from '../Type';
  export const addUser = (user) => ({
    type: ADD_USER,
    data: {id: Date.now(), ...user},
  });

  export const deleteUser = (id) => ({
    type: DELETE_USER,
    data: {id},
  });