import { GetUserByIdInterface } from "@application/interface/use-cases/users/GetUserByIdInterface";
import { GetUserByIdRepositoty } from "@application/interface/repositories/users/GetUserByIdRepository";
import { UserNotFoundError } from "@application/errors/UserNotFoundError";

export class GetUserById implements GetUserByIdInterface {
  constructor(private readonly getUserRepository: GetUserByIdRepositoty) {}

  async execute(
    userId: GetUserByIdInterface.Request
  ): Promise<GetUserByIdInterface.Response> {
    const user = await this.getUserRepository.getUserById(userId);
    if (user instanceof UserNotFoundError) {
      return new UserNotFoundError();
    }

    return user;
  }
}
