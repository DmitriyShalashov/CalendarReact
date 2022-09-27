import axios, { AxiosResponse } from "axios";
import { IUser } from "../models/types";
import users from './users.json'

export default class UserService{
    static async getUsers():Promise<AxiosResponse<IUser[]>> {
        console.log(users)
        return axios.get<IUser[]>('users.json')
    }
    static checkAuth(){
        const user={} as IUser
        user.username=localStorage.getItem('user')||''
        user.password=localStorage.getItem('password')||''
        return user
    }
}