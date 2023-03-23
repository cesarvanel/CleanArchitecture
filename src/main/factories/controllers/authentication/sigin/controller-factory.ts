import { BaseController } from "@infrastructure/http/controller/BaseController";
import { SignInController } from "@infrastructure/http/controller/authentication/SignInController";
import { makeSignInValidation } from "@main/factories/controllers/authentication/sigin/validation-factory";
import { makeSignIn } from "@main/factories/use-cases/sign-in-factoty";

export const makeSingController = (): BaseController => {
  const validation = makeSignInValidation();
  const useCase = makeSignIn();
  return new SignInController(validation, useCase);
};
