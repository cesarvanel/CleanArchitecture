import { expressMiddlewareAdapter } from "@main/adapters/express-middleware-adapter"; 
import { makeAuthMiddleWare } from "@main/factories/middleware/auth-middleware-factory";

export const authMiddleware = expressMiddlewareAdapter(makeAuthMiddleWare());