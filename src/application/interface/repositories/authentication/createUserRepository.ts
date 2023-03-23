import { userProps } from "@domain/entities/user";

export interface CreateUserRepository{
    createUser:(userData : CreateUserRepository.Request) => Promise<CreateUserRepository.Response>
}

export namespace CreateUserRepository{

    export type Request = Omit<userProps , 'id'| 'createdAt' | 'updatedAt'>
    export type Response = string ;
}