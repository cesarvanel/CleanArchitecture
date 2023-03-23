import { HttpRequest } from "@infrastructure/http/interface/HttpRequest";
import { HttpResponse } from "@infrastructure/http/interface/HttpResponse";
import { DeleteUserByIdInterface } from "@application/interface/use-cases/users/DeleteUserByIdInterface";
import { GetUserByIdInterface } from "@application/interface/use-cases/users/GetUserByIdInterface";
import {
  forbidden,
  noContent,
  notFound,
} from "@infrastructure/http/helpers/http";
import { BaseController } from "@infrastructure/http/controller/BaseController";
import { UserNotFoundError } from "@application/errors/UserNotFoundError";
import { PermissionError } from "@infrastructure/http/errors/PermissionError";

export class DeleteUserByIdController extends BaseController {
  constructor(
    private readonly deleteUserById: DeleteUserByIdInterface,
    private readonly getUsertById: GetUserByIdInterface
  ) {
    super();
  }

  async execute(
    httpRequest: DeleteUserByIdController.Request
  ): Promise<DeleteUserByIdController.Response> {
    const { userId } = httpRequest;
    const { id } = httpRequest.params;
    const userOrError = await this.getUsertById.execute(id);
    if (userOrError instanceof UserNotFoundError) {
      return notFound(userOrError);
    }

    if (userOrError.id !== userId) {
      return forbidden(new PermissionError());
    }

    await this.deleteUserById.execute(id);
    return noContent();
  }
}

export namespace DeleteUserByIdController {
  export type Request = HttpRequest<undefined, { id: string }>;
  export type Response = HttpResponse<undefined | PermissionError>;
}
