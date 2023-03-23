import compression from 'compression';
import { Request, Response , NextFunction} from 'express';


export const  compress  = compression();