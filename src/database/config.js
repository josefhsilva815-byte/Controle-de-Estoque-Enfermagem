import Config from "../../knexfile.js";
import knex from "knex";
import dotenv from "dotenv";

dotenv.config()
const environment = process.env.NODE_ENV || "development"

export const conn = knex(Config[environment]);

conn.raw("SELECT 1")
.then(() => {
    console.log("✅ Conexão com o banco de dados OK!");
}).catch((error) => {
    console.error("❌ Erro ao se conectar com o banco de dados!", error.message);
});