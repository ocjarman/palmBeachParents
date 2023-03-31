import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import { useDispatch } from 'react-redux';
import newUserReducer from './newUserSlice'
import eventsReducer from './eventsSlice';
import allUsersReducer from './allUsersSlice';
import thingsToDoReducer from './thingsToDoSlice';
import favoritesReducer from './favoritesSlice';
import recommendationsReducer from './recommendationsSlice'

const store = configureStore({
    reducer: {
        user: userReducer,
        newUser: newUserReducer,
        events: eventsReducer,
        allUsers: allUsersReducer,
        thingsToDo: thingsToDoReducer,
        favorites: favoritesReducer,
        recommendations: recommendationsReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;