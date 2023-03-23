import DbConnections from "@infrastructure/db/mongodb/helper/db-connections";
import { setUpApp } from "@main/config/app";
import env from "@main/config/env";

DbConnections.connect(env.mongodbUrl).then(async =>{
    const app = setUpApp();

    app.listen(env.port, () =>{
        console.log(`server is running on port ${env.port}`)
    })
}).catch(console.error)