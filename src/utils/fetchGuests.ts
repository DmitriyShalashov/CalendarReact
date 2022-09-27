
import UserService from "../api/UserService";
import { AppDispatch } from "../store";
import { eventSlice } from "../store/reducers/calendar";

export const fetchGuests=async(dispatch:AppDispatch)=>{
    try{
        const responce=await UserService.getUsers()
        dispatch(eventSlice.actions.setUser(responce.data))
    }
    catch(e){
        console.log(e)
    }
}