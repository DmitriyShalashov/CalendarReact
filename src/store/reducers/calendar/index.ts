import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IEvent, IUser } from "../../../models/types"
import { EventState } from "./types"


const initialState:EventState={
    guests:[],
    events:[]
}

export const eventSlice=createSlice({
    name:'event',
    initialState,
    reducers:{
        setEvents(state:EventState=initialState, action:PayloadAction<IEvent>){
            let events=[...state.events,action.payload]
            return {...state,events}
        },
        setUser(state:EventState=initialState, action:PayloadAction<IUser[]>){
            return {...state,guests:action.payload}
        },
    }
})