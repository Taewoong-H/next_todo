import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ToDoState } from '../types';

const initialState: ToDoState[] = [
  {
    id: 0,
    value: '',
    complete: false,
    createDate: 'YYYY-MM-DD',
  },
];

let nextId = 0;

export const toDoSlice = createSlice({
  name: 'ToDo',
  initialState,
  reducers: {
    add: (state, action) => {
      nextId++;
      const date = new Date();
      state.push({
        id: nextId,
        value: action.payload,
        complete: false,
        createDate: date.toISOString().split('T')[0],
      });
    },
    remove: (state, action) => {
      return state.filter((e) => e.id !== action.payload);
    },
    complete: (state, action) => {
      return state.map((e) => (e.id === action.payload ? { ...e, complete: !e.complete } : e));
    },
  },
});

export const { add, remove, complete } = toDoSlice.actions;

export default toDoSlice.reducer;
