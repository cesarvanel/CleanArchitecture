import dbConnections from "@infrastructure/db/mongodb/helper/db-connections";
import { Collection } from "mongodb";
import { CreateUserRepository } from "@application/interface/repositories/authentication/createUserRepository";
import { LoadUserByEmailRepository } from "@application/interface/repositories/authentication/LoadUserByEmailRepositoty";
import {
  objectIdToString,
  mapDocument,
} from "@infrastructure/db/mongodb/helper/mapper";

export class UserRepository
  implements CreateUserRepository, LoadUserByEmailRepository
{
  private static readonly USERCOLLECTION = "users";

  static async getCollection(): Promise<Collection> {
    return dbConnections.getCollection(this.USERCOLLECTION);
  }

  async createUser(
    userData: CreateUserRepository.Request
  ): Promise<CreateUserRepository.Response> {
    const collection = await UserRepository.getCollection();
    const { insertedId } = await collection.insertOne({
      ...userData,
      createdAt: new Date(),
    });
    return objectIdToString(insertedId);
  }
  async loadUserByEmail(
    email: LoadUserByEmailRepository.Request
  ): Promise<LoadUserByEmailRepository.Response> {
    const collection = await UserRepository.getCollection();
    const rawUser = await collection.findOne({ email });
    return rawUser && mapDocument(rawUser);
  }
}
