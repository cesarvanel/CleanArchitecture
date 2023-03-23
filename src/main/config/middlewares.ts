import { Express } from "express";
import { cors } from "@main/middlewares/cors"
import { contentType } from "@main/middlewares/content-type";
import {compress }from "@main/middlewares/compression";


export const  useMiddleware = (app : Express) =>{
    app.use(cors); 
    app.use(contentType);
    app.use(compress);
}