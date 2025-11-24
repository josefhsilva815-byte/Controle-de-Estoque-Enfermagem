import Config from "../../knexfile.js";
import knex from "knex";

export const conn = knex(Config.development);

conn.raw("SELECT 1")
.then(() => {
    console.log("✅ Conexão com o banco de dados OK!");
}).catch((error) => {
    console.error("❌ Erro ao se conectar com o banco de dados!", error.message);
});