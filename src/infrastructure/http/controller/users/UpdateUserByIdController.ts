import { UpdateUserInterface } from "@application/interface/use-cases/users/UpdateUserInterface";
import { HttpRequest } from "@infrastructure/http/interface/HttpRequest";
import { HttpResponse } from "@infrastructure/http/interface/HttpResponse";
import { BaseController } from "@infrastructure/http/controller/BaseController";
import { UserNotFoundError } from "@application/errors/UserNotFoundError";
import { GetUserByIdInterface } from "@application/interface/use-cases/users/GetUserByIdInterface";
import { Validation } from "@infrastructure/http/interface/validation";
import { forbidden, notFound, ok } from "@infrastructure/http/helpers/http";
import { PermissionError } from "@infrastructure/http/errors/PermissionError";

export class UpdateUserController extends BaseController {
  constructor(
    private readonly updateUser: UpdateUserInterface,
    private readonly getUserById: GetUserByIdInterface,
    private readonly updateValidationUser: Validation
  ) {
    super(updateValidationUser);
  }

  async execute(
    httpRequest: UpdateUserController.Request
  ): Promise<UpdateUserController.Response> {
    const userId = httpRequest.userId;
    const { id } = httpRequest.params;
    const { email, name, role, status } = httpRequest.body;
    const errorOrError = await this.getUserById.execute(id);
    if (errorOrError instanceof UserNotFoundError) {
      return notFound(errorOrError);
    }

    if (errorOrError.id !== userId) {
      return forbidden(new PermissionError());
    }

    const updatedUserOrError = await this.updateUser.execute({
      userId: id,
      userData: { email, name, role, status },
    });

    if (updatedUserOrError instanceof UserNotFoundError) {
      return notFound(updatedUserOrError);
    }

    return ok(updatedUserOrError);
  }
}

export namespace UpdateUserController {
  export type Request = HttpRequest<
    UpdateUserInterface.UserDataType,
    { id: string }
  >;
  export type Response = HttpResponse<
    UpdateUserInterface.Response | UserNotFoundError
  >;
}
