import { HttpResponse } from "@infrastructure/http/interface/HttpResponse";
import { HttpRequest } from "@infrastructure/http/interface/HttpRequest";
import { serverError } from "@infrastructure/http/helpers/http";

export abstract class BaseMiddleWare {
  abstract execute(httpRequest: HttpRequest): Promise<HttpResponse>;

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      return await this.execute(httpRequest);
    } catch (error) {
        return serverError(error)
    }
  }
}
