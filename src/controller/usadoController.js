import UsadoRepository from "../repository/UsadoRepository.js";

const usadosRepository = new UsadoRepository();

// GET — LISTAR TODOS
export async function getAllUsados(req, res) {
    try {
        const result = await usadosRepository.getAll();
        return res.status(200).json(result);
    } catch (error) {
        console.error("Erro getAllUsados:", error);
        return res.status(500).json({ error: "Erro ao listar usados." });
    }
}

// GET — BUSCAR POR ID
export async function getByIdUsados(req, res) {
    try {
        const { id } = req.params;
        const result = await usadosRepository.getById(id);

        if (!result) {
            return res.status(404).json({ error: "Registro não encontrado." });
        }

        return res.status(200).json(result);
    } catch (error) {
        console.error("Erro getByIdUsados:", error);
        return res.status(500).json({ error: "Erro ao buscar item usado." });
    }
}

// GET — BUSCAR POR TURNO / TURMA / DISCIPLINA
export async function getByFilterUsados(req, res) {
    try {
        const { tipo, valor } = req.params;
        const permitido = ["turno", "turma", "disciplina"];

        if (!permitido.includes(tipo)) {
            return res.status(400).json({ error: "Filtro inválido." });
        }

        const result = await usadosRepository.getByFilter(tipo, valor);
        return res.status(200).json(result);

    } catch (error) {
        console.error("Erro getByFilterUsados:", error);
        return res.status(500).json({ error: "Erro ao buscar por filtro." });
    }
}

// POST — CRIAR NOVO USO DE ITEM
export async function createUsado(req, res) {
    try {
        const data = req.body;

        const camposObrigatorios = ["instrutor_id", "item_id", "quantidade", "disciplina", "turma", "turno"];
        for (let campo of camposObrigatorios) {
            if (!data[campo]) {
                return res.status(400).json({ error: `Campo obrigatório faltando: ${campo}` });
            }
        }

        const novo = await usadosRepository.create(data);
        return res.status(201).json(novo);

    } catch (error) {
        console.error("Erro createUsado:", error);
        return res.status(500).json({ error: "Erro ao registrar uso do item." });
    }
}

// PUT — ATUALIZAR COMPLETO
export async function updateUsado(req, res) {
    try {
        const { id } = req.params;
        const data = req.body;

        const atualizado = await usadosRepository.update(id, data);

        if (!atualizado) {
            return res.status(404).json({ error: "Registro não encontrado." });
        }

        return res.status(200).json({ message: "Atualizado com sucesso", atualizado });

    } catch (error) {
        console.error("Erro updateUsado:", error);
        return res.status(500).json({ error: "Erro ao atualizar registro." });
    }
}

// DELETE — REMOVER REGISTRO
export async function deleteUsado(req, res) {
    try {
        const { id } = req.params;

        const deletado = await usadosRepository.delete(id);

        if (!deletado) {
            return res.status(404).json({ error: "Registro não encontrado." });
        }

        return res.status(200).json({ message: "Registro removido com sucesso" });

    } catch (error) {
        console.error("Erro deleteUsado:", error);
        return res.status(500).json({ error: "Erro ao deletar registro." });
    }
}
