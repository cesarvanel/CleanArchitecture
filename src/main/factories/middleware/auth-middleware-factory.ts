
import { BaseMiddleWare } from "@infrastructure/http/middleware/BaseMiddleware"
import { makeAuthenticate } from "../use-cases/authenticate-factory";
import { AuthMiddleware } from "@infrastructure/http/middleware/authentication/AuthMiddleWare";

export const makeAuthMiddleWare = () : BaseMiddleWare =>{

    const authenticateUseCase = makeAuthenticate() ; 
    return new AuthMiddleware(authenticateUseCase);

}