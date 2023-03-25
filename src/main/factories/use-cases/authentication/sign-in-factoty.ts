import { SignIninterface } from "@application/interface/use-cases/authentication/SignIninterface";
import { SignIn } from "@application/use-cases/authentication/SignIn";
import { UserRepository } from "@infrastructure/db/mongodb/repositories/UserRepositories";
import { BcryptAdapter } from "@infrastructure/cryptography/BcryptAdapter";
import { JwtAdapter } from "@infrastructure/cryptography/JwtAdapter";
import env from "@main/config/env";

export const makeSignIn = (): SignIninterface => {
  const userRepository= new UserRepository();
  const bcryptAdapter = new BcryptAdapter(env.bcryptSalt);
  const jwtAdapter = new JwtAdapter(env.jwtSecret);
  return new SignIn(bcryptAdapter, jwtAdapter, userRepository);
};
