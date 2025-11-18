import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios';
const initialState = {
    isAuthenticated : false,
    isLoading : false,
    user : null
};

export const registration = createAsyncThunk('auth/registration',
    async(formData)=>{
        const response = await axios.post('http://localhost:5000/api/auth/registration',formData);

        return response.data;
    }
);

export const login = createAsyncThunk('auth/login',
    async(formData)=>{
        const response = await axios.post('http://localhost:5000/api/auth/login',formData);

        return response.data;
    }
);

export const checkAuth = createAsyncThunk('auth/checkAuth',
    async()=>{
        const response = await axios.get('http://localhost:5000/api/auth/checkAuth');
        return response.data;
    }
);


const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers : {},
    extraReducers : (builder)=>{
        builder.addCase(registration.pending,(state)=>{
            state.isAuthenticated = false,
            state.isLoading = true
        }).addCase(registration.fulfilled,(state,action)=>{
            state.isAuthenticated = true,
            state.isLoading = false,
            state.user = action.payload.user
        }).addCase(registration.rejected,(state,action)=>{
            state.isAuthenticated = false,
            state.isLoading = false,
            state.user = null
        }).addCase(login.pending,(state)=>{
            state.isAuthenticated = false,
            state.isLoading = true
        }).addCase(login.fulfilled,(state,action)=>{
            state.isAuthenticated = true,
            state.isLoading = false,
            state.user = action.payload.user
        }).addCase(login.rejected,(state,action)=>{
            state.isAuthenticated = false,
            state.isLoading = false,
            state.user = null
        }).addCase(checkAuth.pending,(state)=>{
            state.isLoading = true
        }).addCase(checkAuth.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.user = (action.payload.success) ? action.payload.user :null ;
            state.isAuthenticate = action.payload.success; 
        }).addCase(checkAuth.rejected,(state,action)=>{
            state.isLoading = false;
            state.user = null;
            state.isAuthenticate = false 
        })
    }
})

export default authSlice.reducer;