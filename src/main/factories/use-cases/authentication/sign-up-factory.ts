import { SignUpInterface } from "@application/interface/use-cases/authentication/SignUpInterface";
import { UserRepository } from "@infrastructure/db/mongodb/repositories/UserRepositories";
import { SignUp } from "@application/use-cases/authentication/SingUp";
import { BcryptAdapter } from "@infrastructure/cryptography/BcryptAdapter";
import env from "@main/config/env";

export const makeSignUp = (): SignUpInterface => {
  const userRepository = new UserRepository();
  const bcryptAdapter = new BcryptAdapter(env.bcryptSalt);
  return new SignUp(userRepository, userRepository, bcryptAdapter);
};
