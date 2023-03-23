import { SignIninterface } from "@application/interface/authentication/SignIninterface";
import { HashCompare } from "@application/interface/use-cases/cryptography/HashCompare";
import { JwtGenerator } from "@application/interface/use-cases/cryptography/JwGenerator";
import { LoadUserByEmailRepository } from "@application/interface/repositories/authentication/LoadUserByEmailRepositoty";
import { UnauthorizedError } from "@application/errors/UnauthorizedError";

export class SignIn implements SignIninterface {
  constructor(
    private readonly hashCompare: HashCompare,
    private readonly jwtGenerator: JwtGenerator,
    private readonly loadUserByEmailRepository: LoadUserByEmailRepository
  ) {}

  async execute(
    credentials: SignIninterface.Request
  ): Promise<SignIninterface.Response> {
    const { email, password } = credentials;
    const user = await this.loadUserByEmailRepository.loadUserByEmail(email);
    if (!user) {
      return new UnauthorizedError();
    }

    const isValidPassword = this.hashCompare.compare(password, user.password);

    if (!isValidPassword) {
      return new UnauthorizedError();
    }

    return this.jwtGenerator.generate(user.id);
  }
}
