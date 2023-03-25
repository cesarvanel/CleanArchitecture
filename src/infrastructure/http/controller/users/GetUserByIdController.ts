import { GetUserByIdInterface } from "@application/interface/use-cases/users/GetUserByIdInterface";
import { UserNotFoundError } from "@application/errors/UserNotFoundError";
import { HttpRequest } from "@infrastructure/http/interface/HttpRequest";
import { HttpResponse } from "@infrastructure/http/interface/HttpResponse";
import { BaseController } from "@infrastructure/http/controller/BaseController";
import { ok, notFound } from "@infrastructure/http/helpers/http";

export class GetUserByIdController extends BaseController {
  constructor(private readonly getUserById: GetUserByIdInterface) {
    super();
  }

  async execute(
    httpRequest: GetUserByIdController.Request
  ): Promise<GetUserByIdController.Response> {
    const { id } = httpRequest.params;
    const userOrError = await this.getUserById.execute(id);
    if (userOrError instanceof UserNotFoundError) {
      return notFound(userOrError);
    }
    return ok(userOrError);
  }
}

export namespace GetUserByIdController {
  export type Request = HttpRequest<undefined, { id: string }>;
  export type Response = HttpResponse<GetUserByIdInterface.Response>;
}
