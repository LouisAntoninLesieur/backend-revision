import "dotenv/config"

import { Sequelize} from "sequelize";

export const sequelize = new Sequelize(process.env.PG_URL,{
  dialect: "postgres",
});

sequelize.authenticate()
      console.log("c'est good");
      