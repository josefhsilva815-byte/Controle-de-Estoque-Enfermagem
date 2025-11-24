// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */


import path from "node:path";
import {configDotenv} from "dotenv";

configDotenv()

const Config = {

  development: {
    client: "mysql2",
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME, 
      port: process.env.DB_PORT
    },
    migrations: {
      directory: path.join("./src/database/knex/migrations")
    }
  },
  production: {
    client: "pg",
    connection: {
      connectionString: process.env.DB_HOST,
      ssl: { rejectUnauthorized: false}
    },
    migrations: {
      directory: path.join("./src/database/knex/migrations")
    }
  }
};

export default Config;