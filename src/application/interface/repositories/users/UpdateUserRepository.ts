import { User } from "@domain/entities/user";
import { userProps } from "@domain/entities/user";

export interface UpdateUserRepository{
    updateUser:(params : UpdateUserRepository.Request ) => Promise<UpdateUserRepository.Response>
}

export namespace UpdateUserRepository{
    export type Request  = {userId : string , userData : Partial<Omit<userProps , 'id' | 'createdAt' | 'updatedAt' >>}
    export type Response = User
}