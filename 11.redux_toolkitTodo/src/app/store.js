import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice'


// take reducer inside the store
export const store=configureStore({
    reducer: todoReducer
})