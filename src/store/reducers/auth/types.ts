import { IUser } from "../../../models/types";

export interface AuthState{
    auth:boolean
    user:IUser
    isLoading:boolean
    error:string
}

export enum AuthActionEnum{
    SET_AUTH="SET_AUTH"
}
export interface SetAuthAction{
    type:AuthActionEnum.SET_AUTH;
    payload:any;
}
export type AuthAction = AuthState
