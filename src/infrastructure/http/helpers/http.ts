import { HttpResponse } from "@infrastructure/http/interface/HttpResponse";
import { ServerError } from "@infrastructure/http/errors/ServerErrors";


export const ok =<T = any >(body : T): HttpResponse<T> =>({
    statutCode:200, 
    body,
});


export const noContent = ():HttpResponse =>({
    statutCode : 204
});

export const badRequest = (error : Error):HttpResponse<Error> =>({
    statutCode : 400, 
    body :error,
});

export const unauthorized = (error : Error):HttpResponse<Error> =>({
    statutCode : 401,
    body : error,
});

export const forbidden = (error : Error) :HttpResponse<Error> =>({
    statutCode : 403, 
    body : error,
});

export const notFound = (error?: Error):HttpResponse<Error> =>({
    statutCode : 404, 
    body : error,
});

export const serverError = (error : Error | unknown) : HttpResponse<Error> =>{
    const stack = error instanceof Error ? error.stack : undefined;
    return{
        statutCode : 500, 
        body : new ServerError(stack),
    }
}

