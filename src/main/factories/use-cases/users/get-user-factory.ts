import { UserRepository } from "@infrastructure/db/mongodb/repositories/UserRepositories";
import { GetUserByIdInterface } from "@application/interface/use-cases/users/GetUserByIdInterface";
import { GetUserById } from "@application/use-cases/users/GetUserById";

export const makeGetuserById = () : GetUserByIdInterface =>{

    const userRepository = new UserRepository(); 
    return new GetUserById(userRepository);
}