import { Validation } from "@infrastructure/http/interface/validation";
import { ValidationComposite } from "@infrastructure/http/validations/ValidationComposite";
import { RequiredFieldValidation } from "@infrastructure/http/validations/RequiredFieldValidation";


export const makeUpdateUserValidation = ():Validation => new ValidationComposite([

    new RequiredFieldValidation('name'),
    new RequiredFieldValidation('email'),
    new RequiredFieldValidation('status'),
    new RequiredFieldValidation('role'),
    new RequiredFieldValidation('password')

], 'body')