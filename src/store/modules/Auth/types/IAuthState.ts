import IUser from './IUser';

export default interface IAuthState{
    user ?: IUser,
    token ?: String,
    isLogging: boolean,
    errors?: String[]
}