import { EmailValidation } from "@infrastructure/http/validations/EmailValidation";
import { RequiredFieldValidation } from "@infrastructure/http/validations/RequiredFieldValidation";
import { ValidationComposite } from "@infrastructure/http/validations/ValidationComposite";
import { EmailValidatorAdapter } from "@infrastructure/http/validators/EmailValidatorAdapter";


export const makeSignInValidation = () :ValidationComposite =>{
    const emailValidator = new EmailValidatorAdapter(); 
    return new ValidationComposite([
        new RequiredFieldValidation('email'),
        new RequiredFieldValidation('password'),
        new EmailValidation('email', emailValidator)
    ], 'body')
}