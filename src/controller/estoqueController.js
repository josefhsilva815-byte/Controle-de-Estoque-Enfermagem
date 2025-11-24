import EstoqueRepository from "../repository/EstoqueRepository.js";

const estoqueRepository = new EstoqueRepository();

export async function getAllItens(req, res) {
    try {
        const itens = await estoqueRepository.listAllEstoque();
        return res.status(200).json(itens);
    } catch (error) {
        return res.status(400).json({ message: "GET ALL ESTOQUE", error: error.message });
    }
}

export async function getByIdItem(req, res) {
    try {
        const { id } = req.params;
        const item = await estoqueRepository.listItemById(id);
        return res.status(200).json(item);
    } catch (error) {
        return res.status(400).json({ message: "GET ITEM BY ID", error: error.message });
    }
}

export async function getByNameItem(req, res) {
    try {
        const { nome } = req.params;
        const itens = await estoqueRepository.listEstoqueByNameItem(nome);
        return res.status(200).json(itens);
    } catch (error) {
        return res.status(400).json({ message: "GET ITEM BY NAME", error: error.message });
    }
}

export async function getByCategoria(req, res) {
    try {
        const { categoria } = req.params;
        const itens = await estoqueRepository.listByCategoria(categoria);
        return res.status(200).json(itens);
    } catch (error) {
        return res.status(400).json({ message: "GET ITEM BY CATEGORY", error: error.message });
    }
}

export async function getByQuantidadeDesc(req, res) {
    try {
        const itens = await estoqueRepository.listByQuantidadeDesc();
        return res.status(200).json(itens);
    } catch (error) {
        return res.status(400).json({ message: "GET ITEMS BY QUANTITY DESC", error: error.message });
    }
}

export async function getByPertoDeVencer(req, res) {
    try {
        const itens = await estoqueRepository.listByPertoDeVencer();
        return res.status(200).json(itens);
    } catch (error) {
        return res.status(400).json({ message: "GET ITEMS NEAR EXPIRATION", error: error.message });
    }
}

export async function getItemsVencidos(req, res) {
    try {
        const itens = await estoqueRepository.listItemsVencidos();
        return res.status(200).json(itens);
    } catch (error) {
        return res.status(400).json({ message: "GET EXPIRED ITEMS", error: error.message });
    }
}

export async function getByInstrutor(req, res) {
    try {
        const { id } = req.params;
        const itens = await estoqueRepository.listByInstrutorId(id);
        return res.status(200).json(itens);
    } catch (error) {
        return res.status(400).json({ message: "GET ITEMS BY INSTRUCTOR", error: error.message });
    }
}

export async function createItem(req, res) {
    try {
        const { nome, quantidade, descricao, categoria, fabricacao, validade, instrutor_id } = req.body;

        await estoqueRepository.createItem(
            nome,
            quantidade,
            descricao,
            categoria,
            fabricacao,
            validade,
            instrutor_id
        );

        return res.status(201).json("Item cadastrado com sucesso!");
    } catch (error) {
        return res.status(400).json({ message: "POST CREATE ITEM", error: error.message });
    }
}

export async function updateItem(req, res) {
    try {
        const { id } = req.params;
        const { nome,
            quantidade,
            descricao,
            categoria,
            fabricacao,
            validade,
            instrutor_id } = req.body;

        await estoqueRepository.updateQuantItem(id, {
            nome,
            quantidade,
            descricao,
            categoria,
            fabricacao,
            validade,
            instrutor_id
        });

        return res.status(200).json("Item atualizado com sucesso!");
    } catch (error) {
        return res.status(400).json({ message: "UPDATE ITEM", error: error.message });
    }
}

export async function deleteItem(req, res) {
    try {
        const { id } = req.params;
        await estoqueRepository.deleteItem(id);
        return res.status(200).json("Item excluído com sucesso!");
    } catch (error) {
        return res.status(400).json({ message: "DELETE ITEM", error: error.message });
    }
}
