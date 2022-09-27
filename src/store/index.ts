import { configureStore } from "@reduxjs/toolkit";
import {combineReducers} from "@reduxjs/toolkit"
import { authSlice } from "./reducers/auth";
import { eventSlice } from "./reducers/calendar";

const rootReducer = combineReducers({
    [authSlice.name]:authSlice.reducer,
    [eventSlice.name]:eventSlice.reducer,
})

export const store=configureStore({
    reducer:rootReducer,
})

export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch