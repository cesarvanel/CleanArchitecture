import express, { Express } from 'express'
import { useMiddleware } from '@main/config/middlewares';
import { setupRoute } from '@main/config/routes';



export const setUpApp = (): Express =>{

  const app = express(); 
  useMiddleware(app);
  setupRoute(app);
  return app ; 
  
}