import { HttpResponse } from "@infrastructure/http/interface/HttpResponse";
import { HttpRequest } from "@infrastructure/http/interface/HttpRequest";
import { Validation } from "@infrastructure/http/interface/validation";
import { badRequest, serverError } from "@infrastructure/http/helpers/http";

export abstract class BaseController {
  constructor(private readonly validation?: Validation) {}

  abstract execute(httpRequest: HttpRequest): Promise<HttpResponse>;

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation?.validate(httpRequest);
      if (error) {
        return badRequest(error);
      }

      return await this.execute(httpRequest);
    } catch (error) {
      return serverError(error);
    }
  }
}
