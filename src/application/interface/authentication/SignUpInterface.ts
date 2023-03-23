import { userProps } from "@domain/entities/user";
import { useCase } from '@application/interface/use-cases/useCases';
import {EmailInUseError} from "@application/errors/EmailInUseError";

export interface SignUpInterface extends useCase<SignUpInterface.Request , SignUpInterface.Response>{
    execute :(userData : SignUpInterface.Request)=>  Promise<SignUpInterface.Response>
}

export namespace SignUpInterface{
    export type Request = Omit<userProps, 'id' |'createdAt' | 'updatedAt'>;
    export type Response = string | EmailInUseError;
}