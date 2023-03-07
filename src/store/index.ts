import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import { useDispatch } from 'react-redux';
import newUserReducer from './newUserSlice'
import eventsReducer from './eventsSlice'

const store = configureStore({
    reducer: {
        user: userReducer,
        newUser: newUserReducer,
        events: eventsReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;