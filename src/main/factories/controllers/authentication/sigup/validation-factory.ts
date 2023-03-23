import { ValidationComposite } from "@infrastructure/http/validations/ValidationComposite";
import { RequiredFieldValidation } from "@infrastructure/http/validations/RequiredFieldValidation";
import { EmailValidation } from "@infrastructure/http/validations/EmailValidation";
import { EmailValidatorAdapter } from "@infrastructure/http/validators/EmailValidatorAdapter";

export const makeSignUpValidation = (): ValidationComposite => {
  const emailValidator = new EmailValidatorAdapter();

  return new ValidationComposite(
    [
      new RequiredFieldValidation("name"),
      new RequiredFieldValidation("email"),
      new RequiredFieldValidation("password"),
      new RequiredFieldValidation("role"),
      new RequiredFieldValidation("status"),
      new EmailValidation("email", emailValidator),
    ],
    "body"
  );
};
