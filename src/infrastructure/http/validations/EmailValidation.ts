import { Validation } from "@infrastructure/http/interface/validation";
import { InvalidParamsError } from "@infrastructure/http/errors/InvalidParamError";
import { EmailValidator } from "@infrastructure/http/validations/interface/EmailValidator";

export class EmailValidation implements Validation {
  constructor(
    private readonly fieldName: string,
    private readonly emailValidator: EmailValidator
  ) {}
  validate(input: any): Error | null {
    const isValid = this.emailValidator.isValid(input[this.fieldName]);
    if (!isValid) {
      return new InvalidParamsError(this.fieldName);
    }

    return null;
  }
}
