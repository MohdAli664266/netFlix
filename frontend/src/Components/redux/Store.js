import {configureStore} from '@reduxjs/toolkit';
import userReducer from './reduceSlice';
export const store = configureStore({
    reducer: {
        app:userReducer
    }
})