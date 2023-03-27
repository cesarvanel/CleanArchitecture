import dbConnections from "@infrastructure/db/mongodb/helper/db-connections";
import { Collection } from "mongodb";
import { CreateUserRepository } from "@application/interface/repositories/authentication/createUserRepository";
import { LoadUserByEmailRepository } from "@application/interface/repositories/authentication/LoadUserByEmailRepositoty";
import { GetUserByIdRepositoty } from "@application/interface/repositories/users/GetUserByIdRepository";
import { DeleteUserRepository } from "@application/interface/repositories/users/DeleteUserByIdRepository";
import { UpdateUserRepository } from "@application/interface/repositories/users/UpdateUserRepository";
import {
  objectIdToString,
  mapDocument,
  isValidObjectId, stringToObjectId
} from "@infrastructure/db/mongodb/helper/mapper";

export class UserRepository
  implements CreateUserRepository, LoadUserByEmailRepository, GetUserByIdRepositoty,DeleteUserRepository,UpdateUserRepository
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

  async getUserById(userId: GetUserByIdRepositoty.Request):Promise<GetUserByIdRepositoty.Response>{
    if(isValidObjectId(userId)){
      throw new Error('this is ont a userdId')
    }
    const collection = await UserRepository.getCollection();
    const rawUser = await collection.findOne({_id : stringToObjectId(userId)}); 
    return rawUser && mapDocument(rawUser);

  }
  async deleteUser(userId: DeleteUserRepository.Request): Promise<DeleteUserRepository.Response>{
    const collection = UserRepository.getCollection();
    (await collection).deleteOne({_id : stringToObjectId(userId)});

  }

  async updateUser(params: UpdateUserRepository.Request): Promise<UpdateUserRepository.Response>{
    const collection = await UserRepository.getCollection();
    const {userData , userId} = params
    const {value : rawUser} = await collection.findOneAndUpdate({_id: stringToObjectId(userId)}, {$set:{...userData,updateAt :new Date() }},    { upsert: true, returnDocument: 'after' },)
    
    return mapDocument(rawUser);

  }
}
