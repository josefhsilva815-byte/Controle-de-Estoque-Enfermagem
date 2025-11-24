import { conn } from "../database/config.js"

class EstoqueRepository {
    async listAllEstoque() {
        return await conn("estoque")
    }

    async listItemById(id) {
        try {
            const estoque = await conn("estoque").where({ id }).first()
            if (!estoque) {
                throw new Error("Item não encontrado!")
            }
            return estoque
        } catch (error) {
            throw new Error(error)
        }
    }

    async listEstoqueByNameItem(nome) {
        return await conn("estoque").where("nome", "like", `${nome}%`);
    }

    async listByCategoria(categoria) {
        return await conn("estoque").where({ categoria })
    }

    async listByQuantidadeDesc() {
        return await conn("estoque").orderBy("quantidade", "desc");
    }

    async listByPertoDeVencer() {
        return await conn("estoque").orderBy("validade", "asc")
    }

    async listItemsVencidos() {
        return await conn("estoque").where("validade", "<", new Date()).orderBy("validade", "asc")
    }

    async listByInstrutorId(id) {
        return await conn("estoque").where("instrutor_id", id)
    }

    async createItem(nome, quantidade, descricao, categoria, fabricacao, validade, instrutor_id) {
        try {
            if (quantidade <= 0) throw new Error("Quantidade inválida!");
            const estoque = conn("estoque").insert({
                nome,
                quantidade,
                descricao,
                categoria,
                fabricacao: new Date(fabricacao),
                validade: new Date(validade),
                instrutor_id
            });
            return estoque;
        } catch (error) {
            throw new Error(error);
        };
    };

    async updateQuantItem(id, quantidade) {
        try {
            const [item] = await conn("estoque").where({id})
            if(!item) throw new Error("Item não encontrado ou inexistente!");
            const newItem = {

            }
            return await conn("estoque").where({id}).update(newItem);
        } catch (error) {
            
        }  
    };
}
export default EstoqueRepository;