import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
    // Enable Redux DevTools
    // devTools: process.env.NODE_ENV === 'development',
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;