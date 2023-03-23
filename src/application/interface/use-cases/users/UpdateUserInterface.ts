import { userProps } from "@domain/entities/user";
import { useCase } from "@application/interface/use-cases/useCases";
import { User } from "@domain/entities/user";
import { UserNotFoundError } from "@application/errors/UserNotFoundError";


export interface UpdateUserByIdInterface extends useCase<UpdateUserByIdInterface.Request , UpdateUserByIdInterface.Response>{
    execute:(params : UpdateUserByIdInterface.Request) => Promise<UpdateUserByIdInterface.Response>
}

export namespace UpdateUserByIdInterface{

    export type UserType = Partial<Omit<userProps, 'id' | 'createdAt'| 'updatedAt'>>;
    export type Request = {userId : string ,userData : UserType }
    export type Response = User | UserNotFoundError
}