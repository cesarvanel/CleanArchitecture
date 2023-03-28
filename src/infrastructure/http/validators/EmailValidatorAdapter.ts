
import isEmail from "validator/lib/isEmail";
import { EmailValidator } from "@infrastructure/http/validations/interface/EmailValidator";

export class EmailValidatorAdapter implements EmailValidator {
  isValid(email: string): boolean {
    return isEmail(email);
  }
}
