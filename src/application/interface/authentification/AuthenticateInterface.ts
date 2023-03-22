import { type useCase } from '@application/interface/use-cases/useCases';
import { type ForbiddenError } from '@application/errors/ForbiddenError';

export interface AuthenticateInterface extends useCase<AuthenticateInterface.Request, AuthenticateInterface.Response> {
  execute: (authentificationToken: AuthenticateInterface.Request) => Promise<AuthenticateInterface.Response>

}

export namespace AuthenticateInterface{
  export type Request = string;
  export type Response = string | ForbiddenError;

}
