import { configureStore } from '@reduxjs/toolkit';
import { NavbarReducer } from './slices/NavbarSlice';
export const store = configureStore({
    reducer:{
        ShowNavBar:NavbarReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch