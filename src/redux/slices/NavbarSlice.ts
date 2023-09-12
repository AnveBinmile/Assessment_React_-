import { createSlice } from '@reduxjs/toolkit';


const initialState={
    showNav: false,
};

export const NavBarSlice =  createSlice({
    name : 'ShowNavBar',
    initialState,
    reducers:{
        setShowNav:(state)=>{
            state.showNav = !state.showNav;
        }
    }
});

export const {setShowNav} = NavBarSlice.actions;
export const NavbarReducer =  NavBarSlice.reducer;