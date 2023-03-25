
import { BaseMiddleWare } from "@infrastructure/http/middleware/BaseMiddleware"
import { makeAuthenticate } from "@main/factories/use-cases/authentication/authenticate-factory";
import { AuthMiddleware } from "@infrastructure/http/middleware/authentication/AuthMiddleWare";

export const makeAuthMiddleWare = () : BaseMiddleWare =>{

    const authenticateUseCase = makeAuthenticate() ; 
    return new AuthMiddleware(authenticateUseCase);

}