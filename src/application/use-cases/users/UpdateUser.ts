import { UpdateUserRepository } from "@application/interface/repositories/users/UpdateUserRepository";
import { UpdateUserInterface } from "@application/interface/use-cases/users/UpdateUserInterface";
import { GetUserByIdRepositoty } from "@application/interface/repositories/users/GetUserByIdRepository";
import { UserNotFoundError } from "@application/errors/UserNotFoundError";



export class UpdateUser implements UpdateUserInterface{

    constructor(
        private readonly updateUserRepository : UpdateUserRepository, 
        private readonly getUserByIdRepository : GetUserByIdRepositoty
    ){

    }
    async execute(params: UpdateUserInterface.Request): Promise<UpdateUserInterface.Response>{
        const {userId , userData} = params;

        const user = await this.getUserByIdRepository.getUserById(userId);
        if(user instanceof UserNotFoundError){
            return new UserNotFoundError()
        }

        return this.updateUserRepository.updateUser({userId, userData })


    }

}