import { DeleteUserByIdInterface } from "@application/interface/use-cases/users/DeleteUserByIdInterface"
import { DeleteUser } from "@application/use-cases/users/DeleteUser";
import { UserRepository } from "@infrastructure/db/mongodb/repositories/UserRepositories";

export const makeDeleteUser = ():DeleteUserByIdInterface =>{
    const userRepository= new UserRepository()
    return new DeleteUser(userRepository);


}