import { IUser } from "../models/types";
import { AppDispatch } from "../store";
import { authSlice } from "../store/reducers/auth";

export const logout=async(dispatch:AppDispatch)=>{
    dispatch(authSlice.actions.setUser({} as IUser))
    dispatch(authSlice.actions.setError(''))
    dispatch(authSlice.actions.setAuth(false))
    localStorage.removeItem('user')
}