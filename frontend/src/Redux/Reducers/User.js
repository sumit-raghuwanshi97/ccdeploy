import { createReducer } from "@reduxjs/toolkit";

const initialState = {
 loading : false ,
 isAuthenticated : false,
};

export const userReducer = createReducer(initialState,{

    LoginRequest : (state) => {
        state.loading = true;
    },

    LoginSuccess : (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
    },

    LoginFailure : (state,action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
    },

    
    RegisterRequest : (state) => {
        state.loading = true;
    },

    RegisterSuccess : (state) => {
        state.loading = false;
    },

    RegisterFailure : (state, action) => {
        state.loading  = false;
        state.error = action.payload;
    },


    LoadUserRequest : (state) => {
        state.loading = true;
    },

    LoadUserSuccess : (state, action) => {
        state.loading = false;
        state.user = action.payload.User;
        state.isAuthenticated = action.payload.success;
    },

    LoadUserFailure : (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
    },




});