import axios from 'axios'
import {IUser, IUserResponse, ILoginForm} from '../types'

export class AuthService{
    static async login (request:ILoginForm){
        try{
            const response = await axios
             .post<IUserResponse>("/login_taammunde", request)
             
             return Promise.resolve(response.data)
         }catch(err){
             return Promise.reject(err)
         }
    }
}
