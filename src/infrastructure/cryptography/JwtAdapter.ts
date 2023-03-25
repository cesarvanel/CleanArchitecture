import { JwtGenerator } from "@application/interface/cryptography/JwGenerator";
import { JwtVerfier } from "@application/interface/cryptography/JwVerificator";
import jwt from "jsonwebtoken";

export class JwtAdapter implements JwtGenerator, JwtVerfier {
  constructor(private readonly secret: string) {}

  async generate(payload: string): Promise<string> {
    return jwt.sign(payload, this.secret);
  }

  async verify(token: string): Promise<string | null> {
    try {
      return jwt.verify(token, this.secret) as string;
    } catch (error) {
      return null;
    }
  }
}
