import { Express } from "express";
import { cors } from "@main/middlewares/cors"
import { contentType } from "@main/middlewares/content-type";
import {compress }from "@main/middlewares/compression";
import { useMorgan } from "@main/middlewares/morgan";
import { bodyParser } from "@main/middlewares/body-parser";
import { authMiddleware } from "@main/middlewares/auth-middleware";


export const  useMiddleware = (app : Express) =>{
    app.use(cors); 
    app.use(contentType);
    app.use(bodyParser);
    app.use(compress);
    app.use(useMorgan)
    app.use(authMiddleware)
}