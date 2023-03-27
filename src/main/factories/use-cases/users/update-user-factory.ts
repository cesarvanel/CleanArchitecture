
import { UpdateUserInterface } from "@application/interface/use-cases/users/UpdateUserInterface";
import { UserRepository } from "@infrastructure/db/mongodb/repositories/UserRepositories";
import { UpdateUser } from "@application/use-cases/users/UpdateUser";

export const makeUpdateUser = () :UpdateUserInterface =>{
    const userRepository = new UserRepository()

    return new UpdateUser(userRepository , userRepository)
}