import { conn } from "../database/config.js";

class UsadoRepository {

    // LISTAR TODOS
    async getAll() {
        return await conn("usado");
    }

    // BUSCAR POR ID
    async getById(id) {
        const usado = await conn("usado").where({ id }).first();
        return usado || null;
    }

    // BUSCAR POR FILTRO: turno, turma, disciplina
    async getByFilter(field, value) {
        return await conn("usado").where(field, value);
    }

    // CRIAR (ADD)
    async create(data) {
        const inserted = await conn("usado").insert({
            instrutor_id: data.instrutor_id,
            item_id: data.item_id,
            quantidade: data.quantidade,
            disciplina: data.disciplina,
            observacao: data.observacao ?? "vazio",
            turma: data.turma,
            turno: data.turno,
            data_criacao: conn.fn.now()
        });

        return inserted;
    }

    // UPDATE
    async update(id, updates) {
        const existe = await conn("usado").where({ id }).first();
        if (!existe) return null;

        await conn("usado").where({ id }).update(updates);
        return await conn("usado").where({ id }).first();
    }

    // DELETE
    async delete(id) {
        const existe = await conn("usado").where({ id }).first();
        if (!existe) return null;

        return await conn("usado").where({ id }).del();
    }
}

export default UsadoRepository;