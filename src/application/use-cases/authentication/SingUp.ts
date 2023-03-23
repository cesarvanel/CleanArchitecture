import { CreateUserRepository } from "@application/interface/repositories/authentication/createUserRepository";
import { SignUpInterface } from "@application/interface/authentication/SignUpInterface";
import { HahGenerator } from "@application/interface/use-cases/cryptography/HashGenerator";
import { LoadUserByEmailRepository } from "@application/interface/repositories/authentication/LoadUserByEmailRepositoty";
import { EmailInUseError } from "@application/errors/EmailInUseError";

export class SignUp implements SignUpInterface {
  constructor(
    private readonly createUserRepository: CreateUserRepository,
    private readonly loadUserByEmailRepository: LoadUserByEmailRepository,
    private readonly hahGenerator: HahGenerator
  ) {}

  async execute(
    userData: SignUpInterface.Request
  ): Promise<SignUpInterface.Response> {
    const { email, password } = userData;
    const existingUser = await this.loadUserByEmailRepository.loadUserByEmail(
      email
    );

    if (existingUser) {
      return new EmailInUseError();
    }

    const hahedPassword = await this.hahGenerator.generate(password);

    return this.createUserRepository.createUser({
      ...userData,
      password: hahedPassword,
    });
  }
}
