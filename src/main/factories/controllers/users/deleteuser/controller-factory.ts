import { BaseMiddleWare } from "@infrastructure/http/middleware/BaseMiddleware"
import { makeDeleteUser } from "@main/factories/use-cases/users/delete-user-factory";
import { DeleteUserController } from "@infrastructure/http/controller/users/DeleteUserController";
import { makeGetuserById } from "@main/factories/use-cases/users/get-user-factory";

export const makedeleteUserController = (): BaseMiddleWare =>{

    const deleteUserCase = makeDeleteUser();
    const getUserByIdCase = makeGetuserById();
    return  new DeleteUserController(deleteUserCase,getUserByIdCase)

} 