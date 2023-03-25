import { BaseMiddleWare } from '@infrastructure/http/middleware/BaseMiddleware';
import { AuthenticateInterface } from '@application/interface/use-cases/authentication/AuthenticateInterface';
import { HttpResponse } from "@infrastructure/http/interface/HttpResponse";
import { HttpRequest } from "@infrastructure/http/interface/HttpRequest"
import { forbidden, ok } from '@infrastructure/http/helpers/http';
import { ForbiddenError } from '@application/errors/ForbiddenError';
import { AuthTokenNotProviderError } from '@infrastructure/http/errors/AuthTokenNotProviderError';
import { InvalidAuthTokenError } from '@infrastructure/http/errors/InvalidAuthTokenErrors';

export class AuthMiddleware extends BaseMiddleWare {
  constructor(
    private readonly authenticate: AuthenticateInterface,
  ) {
    super();
  }

  async execute(httpRequest: AuthMiddleware.Request): Promise<AuthMiddleware.Response> {
    const authHeader = httpRequest.headers?.authorization;
    if (!authHeader) {
      return forbidden(new AuthTokenNotProviderError());
    }
    const [, authToken] = authHeader.split(' ');
    const userIdOrError = await this.authenticate.execute(authToken);
    if (userIdOrError instanceof ForbiddenError) {
      return forbidden(new InvalidAuthTokenError());
    }
    return ok({ userId: userIdOrError });
  }
}

export namespace AuthMiddleware {
  export type Request = HttpRequest<undefined, undefined, { authorization: string }>;
  export type Response = HttpResponse<{ userId: string } | AuthTokenNotProviderError | InvalidAuthTokenError>;
}