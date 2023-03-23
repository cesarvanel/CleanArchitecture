import { BaseController } from "@infrastructure/http/controller/BaseController";
import { SignUpInterface } from "@application/interface/authentication/SignUpInterface";
import { SignIninterface } from "@application/interface/authentication/SignIninterface";
import { HttpResponse } from "@infrastructure/http/interface/HttpResponse";
import { HttpRequest } from "@infrastructure/http/interface/HttpRequest";
import { Validation } from "@infrastructure/http/interface/validation";
import { ok, forbidden } from "@infrastructure/http/helpers/http";
import { EmailInUseError } from "@application/errors/EmailInUseError";

export class SignUpController extends BaseController {
  constructor(
    private readonly singUpValidation: Validation,
    private readonly signUp: SignUpInterface,
    private readonly signIn: SignIninterface
  ) {
    super(singUpValidation);
  }

  async execute(
    httpRequest: SignUpController.Request
  ): Promise<SignUpController.Response> {
    const { name, password, email, status, role } = httpRequest.body;
    const idOrError = await this.signUp.execute({
      name,
      password,
      email,
      status,
      role,
    });
    if (idOrError instanceof EmailInUseError) {
      return forbidden(idOrError);
    }

    const authenticationTokenError = await this.signIn.execute({
      email,
      password,
    });
    if (authenticationTokenError instanceof Error) {
      throw authenticationTokenError;
    }

    return ok({
      authenticationToken: authenticationTokenError,
    });
  }
}

export namespace SignUpController {
  export type Request = HttpRequest<SignUpInterface.Request>;
  export type Response = HttpResponse<
    { authenticationToken: string } | EmailInUseError
  >;
}
