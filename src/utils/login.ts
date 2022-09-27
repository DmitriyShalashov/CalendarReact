import { AppDispatch } from "../store";
import { authSlice } from "../store/reducers/auth";
import UserService from "../api/UserService";

export const login=async(username:string,password:string,dispatch:AppDispatch)=>{
    try{
        dispatch(authSlice.actions.setLoading(true))
        const {data}=await UserService.getUsers()
        const responce=data.find(user=>user.username===username&&user.password===password)
        if(responce!==undefined)
        {
            dispatch(authSlice.actions.setUser(responce))
            dispatch(authSlice.actions.setError(''))
            dispatch(authSlice.actions.setAuth(true))
            localStorage.setItem('user', username)
            localStorage.setItem('password', password)
        }
        else{
            dispatch(authSlice.actions.setError('Неверный логин или пароль'))
        }
       
        dispatch(authSlice.actions.setLoading(false))
    }
    catch(e){
        dispatch(authSlice.actions.setError('Неверный логин или пароль'))
    }
}