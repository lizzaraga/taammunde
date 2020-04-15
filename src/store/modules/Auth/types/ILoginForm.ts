import { ETypeUser } from './ETypeUser';

export default interface ILoginForm{
    email: string;
    password: string;
    typeUser: ETypeUser
}