import { expressRouteAdapter } from "@main/adapters/express-route-adapter";
import { Router } from "express";
import { makeSignUpController } from "@main/factories/controllers/authentication/sigup/controller-factory";
import { makeSingController } from "@main/factories/controllers/authentication/sigin/controller-factory";

export const authenticationRoute = (router : Router) =>{

    router.post('/login' , expressRouteAdapter(makeSingController())); 
    router.post('/register', expressRouteAdapter(makeSignUpController()))
}