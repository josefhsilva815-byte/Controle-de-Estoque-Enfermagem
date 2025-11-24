import { conn } from "../database/config.js";

class InstrutorRepository {
    async listAllInstrutores() {
        return await conn("instrutores");
    };

    async listInstrutorById(id) {
        try {
            const instrutor = await conn("instrutores").where({ id }).first();
            if (!instrutor) throw new Error("Instrutor não encontrado!");
            return instrutor;
        } catch (error) {
            throw new Error(error);
        };
    };

    async listInstrutorByEmail(email) {
        try {
            const instrutor = await conn("instrutores").where("email", "like", `${email}%`);
            if (!instrutor) throw new Error("Instrutor não encontrado!");
            return instrutor;
        } catch (error) {
            throw new Error(error);
        };
    };

    async listInstrutorByName(name) {
        try {
            const instrutor = await conn("instrutores").where("nome", "like", `${name}%`);
            if (!instrutor) throw new Error("Instrutor não encontrado!");
            return instrutor;
        } catch (error) {
            throw new Error(error);
        };
    };

    async createInstrutor(nome, email, senha) {
        try {
            if(!(nome && email && senha)) throw new Error("Algum valor está vazio!");
            const newInstrutor = conn("instrutores").insert({
                nome,
                email,
                senha
            });
            return newInstrutor;
        } catch (error) {
            throw new Error(error);
        };
    };

    async updateInstrutor(id, dados) {
        try {
            const [instrutor] = await conn("instrutores").where({id});
            if(!instrutor) throw new Error("Instrutor não encontrado!");
            const updateInstrutor = {
                nome: dados.nome ?? instrutor.nome,
                email: dados.email ?? instrutor.email,
                senha: dados.senha ?? instrutor.senha
            };
            return await conn("instrutores").where({id}).update(updateInstrutor);
        } catch (error) {
            throw new Error(error);
        };
    };

    async deleteInstrutor(id) {
        try {
            const instrutor = await conn("instrutores").where({id}).first();
            if(!instrutor) throw new Error("Instrutor não encontrado!");
            return await conn("instrutores").where({id}).delete();
        } catch (error) {
            throw new Error(error);
        };
    };
}

export default InstrutorRepository;