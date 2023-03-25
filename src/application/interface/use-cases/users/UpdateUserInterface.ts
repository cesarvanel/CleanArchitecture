import { userProps } from "@domain/entities/user";
import { useCase } from "@application/interface/use-cases/useCases";
import { User } from "@domain/entities/user";
import { UserNotFoundError } from "@application/errors/UserNotFoundError";


export interface UpdateUserInterface extends useCase<UpdateUserInterface.Request , UpdateUserInterface.Response>{
    execute:(params : UpdateUserInterface.Request) => Promise<UpdateUserInterface.Response>
}

export namespace UpdateUserInterface{
    export type Request = {userId : string ,userData : Partial<Omit<userProps, 'id' | 'createdAt'| 'updatedAt'>>}
    export type Response = User | UserNotFoundError;
}