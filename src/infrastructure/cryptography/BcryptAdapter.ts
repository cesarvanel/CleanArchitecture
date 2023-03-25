import bcrypt from "bcrypt";
import { HahGenerator } from "@application/interface/cryptography/HashGenerator";
import { HashCompare } from "@application/interface/cryptography/HashCompare";

export class BcryptAdapter implements HahGenerator, HashCompare {
  constructor(private readonly salt: number) {}
  async generate(data: string): Promise<string> {
    return bcrypt.hash(data, this.salt);
  }
  async compare(plainText: string, hash: string): Promise<Boolean> {
    return bcrypt.compare(plainText, hash);
  }
}
