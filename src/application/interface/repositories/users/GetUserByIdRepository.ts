
import { UserNotFoundError } from "@application/errors/UserNotFoundError";
import { User } from "@domain/entities/user";


export interface GetUserByIdRepositoty{
    getUserById:(userId : string) => Promise<GetUserByIdRepositoty.Response> 
}


export namespace GetUserByIdRepositoty {
    export type Request = string; 
    export type Response = User | UserNotFoundError 
}