import { useCase } from "@application/interface/use-cases/useCases";
import {UnauthorizedError} from "@application/errors/UnauthorizedError";

export interface SignIninterface extends useCase<SignIninterface.Request , SignIninterface.Response>{
    execute: (credentials : SignIninterface.Request) => Promise<SignIninterface.Response>
}


export namespace SignIninterface{
    export type Request = {email : string , password : string };
    export type Response = string | UnauthorizedError;
}