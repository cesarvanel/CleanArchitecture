import { BaseController } from "@infrastructure/http/controller/BaseController";
import { SignUpController } from "@infrastructure/http/controller/authentication/SignUpController";
import { makeSignUp } from "@main/factories/use-cases/sign-up-factory";
import { makeSignIn } from "@main/factories/use-cases/sign-in-factoty";
import { makeSignUpValidation } from "@main/factories/controllers/authentication/sigup/validation-factory";

export const makeSignUpController = () : BaseController =>{

    const validation = makeSignUpValidation(); 
    const sigUpUseCase = makeSignUp();
    const sigInUseCase = makeSignIn();
    return new SignUpController(validation ,  sigUpUseCase , sigInUseCase);
}