import 'module-alias/register';

import  DbConnection from "@infrastructure/db/mongodb/helper/db-connections";
import { setUpApp } from "@main/config/app";
import env from "@main/config/env";

DbConnection.connect(env.mongodbUrl).then(_async =>{
    const app = setUpApp();

    app.listen(env.port, () =>{
        console.log(`server is running on port ${env.port}`)
    })
}).catch(console.error);