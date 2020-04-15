import {Module} from 'vuex'
import { IAuthState, IUser } from './types'
import { IRootState } from '@/store/types/IRootState'
import { AuthService } from './services';
import Vue from 'vue'
import {ILoginForm} from './types'

const checkEmptyField = (field: string, errorMessage: string, errors: String[]) => {
    if(field.trim() == ""){
        errors.push(errorMessage);
    }
    
}

export const AuthModule: Module<IAuthState, IRootState> = {
    namespaced: true,
    state:{
        user : undefined,
        isLogging: false,
        
    },
    getters:{
        user(state){
            return state.user;
        },
        errors(state){
            return state.errors; 
        }
    },
    mutations:{
        SET_USER(state, user: IUser){
            state.user = user;
        },
        SET_ERRORS(state, errors: String[]){
            state.errors = errors;
        },
        SET_IS_LOGGING(state, isLogging: boolean){
            state.isLogging = isLogging;
        }
    },
    actions:{
        loginUser({commit}, user: ILoginForm){
            console.log("Vue cookies", Vue.$cookies)
            console.log("user", user)
            commit("SET_IS_LOGGING", true);
            const errors = Array<string>();

            checkEmptyField(user.email, "Email must not be null", errors);
            // CHECK IF EMAIL IS CORRECT
            checkEmptyField(user.password, "Password must not be null", errors);
            // CHECK IF USERNAME IS CORRECT

            if(errors.length > 0){
                commit("SET_IS_LOGGING", false);
                commit("SET_ERRORS", errors);
                return;
            }
            
           
            // USE API TO CONNECT USER
            AuthService.login(user)
                .then((res)=>{
                    console.log(res)
                })
                .catch((err) => {
                    console.log("err", err)
                })
        }
    }


}