import { BaseController } from "@infrastructure/http/controller/BaseController";
import { SignIninterface } from "@application/interface/authentication/SignIninterface";
import { HttpResponse } from "@infrastructure/http/interface/HttpResponse";
import { HttpRequest } from "@infrastructure/http/interface/HttpRequest";
import { Validation } from "@infrastructure/http/interface/validation";
import { ok , unauthorized  } from "@infrastructure/http/helpers/http";
import { UnauthorizedError } from "@application/errors/UnauthorizedError";

export class SignInController extends BaseController{
   

    constructor(
        private readonly signInValidation : Validation, 
        private readonly sigIn : SignIninterface
    ){
        super(signInValidation)
    }

    async execute(httpRequest:SignInController.Request ): Promise<SignInController.Response> {

        const {email , password} = httpRequest.body
        const authenticationTokenError = await this.sigIn.execute({email, password});
        if(authenticationTokenError instanceof UnauthorizedError){
            return unauthorized(authenticationTokenError)
        }
        
      return ok({
        authenticationToken : authenticationTokenError
      })
    }

}

export namespace SignInController{
    export type Request = HttpRequest<SignIninterface.Request>; 
    export type Response = HttpResponse<{authenticationToken : string} | UnauthorizedError >
}