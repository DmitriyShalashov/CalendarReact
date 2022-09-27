import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../../models/types";
import { AuthState } from "./types";


const initialState:AuthState = {
    auth: false,
    user:{} as IUser,
    error:'',
    isLoading:false,
}

export const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        setAuth(state:AuthState=initialState, action:PayloadAction<boolean>){
            return state={...state,auth:action.payload, isLoading:false}
        },
        setUser(state:AuthState=initialState, action:PayloadAction<IUser>){
            return state={...state,user:action.payload}
        },
        setLoading(state:AuthState=initialState, action:PayloadAction<boolean>){
            return state={...state,isLoading:action.payload}
        },
        setError(state:AuthState=initialState, action:PayloadAction<string>){
            return state={...state,error:action.payload, isLoading:false}
        },
        
    }
})