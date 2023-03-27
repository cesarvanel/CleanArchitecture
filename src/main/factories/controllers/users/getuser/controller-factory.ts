import { BaseController } from "@infrastructure/http/controller/BaseController";
import { GetUserByIdController } from "@infrastructure/http/controller/users/GetUserByIdController";
import { makeGetuserById } from "@main/factories/use-cases/users/get-user-factory";


export const makeGetUserByIdController = () : BaseController =>{
    const getUserByIdCase = makeGetuserById()
    return new GetUserByIdController(getUserByIdCase);

}