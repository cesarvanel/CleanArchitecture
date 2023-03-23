import { authenticationRoute } from "@main/routers/Authentication-routes";
import { Router , Express } from "express";

const BASE_URL  = '/api'

export const setupRoute = (app : Express) =>{

    const router = Router() ; 
    app.use(BASE_URL , router)
    authenticationRoute(router);
}