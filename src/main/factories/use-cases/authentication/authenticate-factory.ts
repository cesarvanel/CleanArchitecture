import { AuthenticateInterface } from "@application/interface/use-cases/authentication/AuthenticateInterface";
import { Authenticate } from "@application/use-cases/authentication/Authenticates";
import { JwtAdapter } from "@infrastructure/cryptography/JwtAdapter";
import env from '@main/config/env'; 

export const makeAuthenticate = () :AuthenticateInterface =>{

    const jwtAdapter  = new JwtAdapter(env.jwtSecret);
    return new Authenticate(jwtAdapter)
}