import {ForbiddenError} from "@application/errors/ForbiddenError";
import { AuthenticateInterface } from "@application/interface/use-cases/authentication/AuthenticateInterface";
import { JwtVerfier } from "@application/interface/cryptography/JwVerificator";

export class Authenticate implements AuthenticateInterface {
  constructor(private readonly jwtVerifier: JwtVerfier) {}
  async execute(
    authentificationToken: AuthenticateInterface.Request
  ): Promise<AuthenticateInterface.Response> {
    const decodedToken = await this.jwtVerifier.verify(authentificationToken);
    if (!decodedToken) {
      return new ForbiddenError();
    }

    return decodedToken;
  }
}
