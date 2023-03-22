import { useCase } from "@application/interface/use-cases/useCases";

export interface DeleteUserByIdInterface extends useCase<DeleteUserByIdInterface.Request , DeleteUserByIdInterface.Response>{

    execute:(userId : DeleteUserByIdInterface.Request) => Promise<DeleteUserByIdInterface.Response>
}

export namespace DeleteUserByIdInterface{
    export type Request = string; 
    export type Response = void;

}