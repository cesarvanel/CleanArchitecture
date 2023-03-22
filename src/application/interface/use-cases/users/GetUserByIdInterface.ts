import { User } from "@domain/entities/user"
import { useCase } from "@application/interface/use-cases/useCases";
import { UserNotFoundError } from "@application/errors/UserNotFoundError";

export interface GetUserByIdInterface extends useCase<GetUserByIdInterface.Request , GetUserByIdInterface.Response>{
    execute:(userId : GetUserByIdInterface.Request) => Promise<GetUserByIdInterface.Response>
}


export namespace GetUserByIdInterface{
    export type Request =  string
    export type Response = User | UserNotFoundError
}