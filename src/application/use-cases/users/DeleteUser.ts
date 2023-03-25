import { DeleteUserByIdInterface } from "@application/interface/use-cases/users/DeleteUserByIdInterface";
import { DeleteUserRepository } from "@application/interface/repositories/users/DeleteUserByIdRepository";
export class DeleteUser implements DeleteUserByIdInterface {
  constructor(private readonly deleteUserRepository: DeleteUserRepository) {}

  async execute(userId: string): Promise<void> {
    await this.deleteUserRepository.deleteUser(userId);
  }
}
