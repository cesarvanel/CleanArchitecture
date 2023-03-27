import { authenticationRoute } from "@main/routers/Authentication-routes";
import { userRoutes } from "@main/routers/Users-routes";
import { Router , Express } from "express";

const BASE_URL  = '/api'

export const setupRoute = (app : Express) =>{

    const router = Router() ; 
    app.use(BASE_URL , router)
    authenticationRoute(router);
    userRoutes(router);
}