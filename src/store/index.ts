import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import { useDispatch } from 'react-redux';
import newUserReducer from './newUserSlice'
import eventsReducer from './eventsSlice';
import allUsersReducer from './allUsersSlice';
import recommendationsReducer from './recommendationsSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        newUser: newUserReducer,
        events: eventsReducer,
        allUsers: allUsersReducer,
        recommendations: recommendationsReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;