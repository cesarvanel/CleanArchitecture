import { expressRouteAdapter } from "@main/adapters/express-route-adapter";
import { makeGetUserByIdController } from "@main/factories/controllers/users/getuser/controller-factory";
import { makeUpdateUserController } from "@main/factories/controllers/users/updateuser/controller-factory";
import { makedeleteUserController } from "@main/factories/controllers/users/deleteuser/controller-factory";
import { Router } from "express";

export const userRoutes = (router : Router) =>{

    router.get('get_user_by_id',expressRouteAdapter(makeGetUserByIdController()));
    router.post('update_user', expressRouteAdapter(makeUpdateUserController()));
    router.delete('delete_user', expressRouteAdapter(makedeleteUserController()));
}