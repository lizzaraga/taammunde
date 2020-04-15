import { IUser } from '.';

export default interface IUserResponse extends IUser{
    token: string
}