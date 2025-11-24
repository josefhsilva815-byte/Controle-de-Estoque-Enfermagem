import express from "express";

//======>INSTRUTORES<======//
import {
    getAllInstrutores,
    getInstrutorById,
    getInstrutorByName,
    getInstrutorByEmail,
    addInstrutor,
    updateInstrutor,
    deleteInstrutor
} from "./src/controller/instrutoresController.js";

//======>ESTOQUE<======//
import {
    createItem,
    deleteItem,
    getAllItens,
    getByCategoria,
    getByIdItem,
    getByInstrutor,
    getByNameItem,
    getByPertoDeVencer,
    getByQuantidadeDesc,
    getItemsVencidos,
    updateItem
} from "./src/controller/estoqueController.js";

//======>USADO<======//
import {
    getAllUsados,
    getByIdUsados,
    createUsado,
    updateUsado,
    deleteUsado,
    getByFilterUsados
} from "./src/controller/usadoController.js";

const app = express();
app.use(express.json());

const PORT = 3000;

// =========================
// ROTAS – INSTRUTORES
// =========================
app.get("/instrutores", (req, res) => getAllInstrutores(req, res));

app.get("/instrutores/id/:id", (req, res) => getInstrutorById(req, res));

app.get("/instrutores/name/:name", (req, res) => getInstrutorByName(req, res));

app.get("/instrutores/email/:email", (req, res) => getInstrutorByEmail(req, res));

app.post("/instrutores", (req, res) => addInstrutor(req, res));

app.put("/instrutores/update/:id", (req, res) => updateInstrutor(req, res));

app.delete("/instrutores/delete/:id", (req, res) => deleteInstrutor(req, res));


// =========================
// ROTAS – ESTOQUE
// =========================
app.get("/estoque", (req, res) => getAllItens(req, res));

app.get("/estoque/:id", (req, res) => getByIdItem(req, res));

app.post("/estoque", (req, res) => createItem(req, res));

app.put("/estoque/update/:id", (req, res) => updateItem(req, res));

app.delete("/estoque/:id", (req, res) => deleteItem(req, res));

// *Guilherme* ROTAS FALTANTES DO ESTOQUE QUE ACHEI NECESSÁRIO TER, AGORA NÃO SEI SE FIZ CERTO

app.get("/estoque/nome/:name", (req, res) => getByNameItem(req, res));

app.get("/estoque/categoria/:categoria", (req, res) => getByCategoria(req, res));

app.get("/estoque/quantidade/desc", (req, res) => getByQuantidadeDesc(req, res));

app.get("/estoque/perto-vencer", (req, res) => getByPertoDeVencer(req, res));

app.get("/estoque/vencidos", (req, res) => getItemsVencidos(req, res));

app.get("/estoque/instrutor/:instrutor_id", (req, res) => getByInstrutor(req, res));


// =========================
// ROTAS – USO DE ITENS (Tabela usado)
// =========================

// LISTAR TODOS
app.get("/usado", (req, res) => getAllUsados(req, res));
// BUSCAR POR ID
app.get("/usado/:id", (req, res) => getByIdUsados(req, res));
// BUSCAR POR FILTRO (turno/turma/disciplina)
app.get("/usado/filtro/:tipo/:valor", (req, res) => getByFilterUsados(req, res));
// CRIAR
app.post("/usado", (req, res) => createUsado(req, res));
// ATUALIZAR
app.put("/usado/:id", (req, res) => updateUsado(req, res));
// DELETAR
app.delete("/usado/:id", (req, res) => deleteUsado(req, res));


// =========================
// PORTA DO SERVIDOR
// =========================
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
