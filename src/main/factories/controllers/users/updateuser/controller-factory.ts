
import { UpdateUserRepository } from "@application/interface/repositories/users/UpdateUserRepository";
import { BaseController } from "@infrastructure/http/controller/BaseController";
import { UpdateUserController } from "@infrastructure/http/controller/users/UpdateUserByIdController";
import { makeUpdateUser } from "@main/factories/use-cases/users/update-user-factory";
import { makeGetuserById } from "@main/factories/use-cases/users/get-user-factory";
import { makeUpdateUserValidation } from "./validation-factory";

export const makeUpdateUserController = () : BaseController =>{
    const updateUserCase = makeUpdateUser();
    const getUserByIdCase = makeGetuserById();
    const updateUserValidation = makeUpdateUserValidation()
    return new  UpdateUserController(updateUserCase, getUserByIdCase, updateUserValidation )
}
