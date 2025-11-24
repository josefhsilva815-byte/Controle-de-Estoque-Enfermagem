import InstrutorRepository from "../repository/InstrutorRepository.js";

const instrutorRepository = new InstrutorRepository();

export async function getAllInstrutores(req, res) {
    try {
        const instrutores = await instrutorRepository.listAllInstrutores();
        return res.status(200).json(instrutores);
    } catch (error) {
        return res.status(400).json({message: "GET ALL INSTRUTORES", error: error.message});
    };
};

export async function getInstrutorById(req, res) {
    try {
        const {id} = req.params;
        const instrutor = await instrutorRepository.listInstrutorById(id);
        return res.status(200).json(instrutor);
    } catch (error) {
        return res.status(400).json({message: "GET INSTRUTOR BY ID", error: error.message});
    };
};

export async function getInstrutorByName(req, res) {
    try {
      const {name} = req.params;
      const instrutores = await instrutorRepository.listInstrutorByName(name);
      return res.status(200).json(instrutores);  
    } catch (error) {
        res.status(400).json({message: "GET INSTRUTORES BY NAME", error: error.message});
    };
};

export async function getInstrutorByEmail(req, res) {
    try {
      const {email} = req.params;
      const instrutores = await instrutorRepository.listInstrutorByEmail(email);
      return res.status(200).json(instrutores);  
    } catch (error) {
        res.status(400).json({message: "GET INSTRUTORES BY EMAIL", error: error.message});
    };
};

export async function addInstrutor(req, res) {
    try {
        const {nome, email, senha} = req.body;
        await instrutorRepository.createInstrutor(nome, email, senha);
        return res.status(201).json("Instrutor cadastrado com sucesso!");
    } catch (error) {
        return res.status(400).json({message: "POST CREATE INSTRUTOR", error: error.message});
    };
};

export async function updateInstrutor(req, res) {
    try {
        const {id} = req.params;
        const {nome, email, senha} = req.body;
        await instrutorRepository.updateInstrutor(id, {nome, email, senha});
        return res.status(200).json("Instrutor atualizado com sucesso!");
    } catch (error) {
        return res.status(400).json({message: "UPDATE INSTRUTOR", error: error.message});  
    };
};

export async function deleteInstrutor(req, res) {
    try {
        const {id} = req.params;
        await instrutorRepository.deleteInstrutor(id);
        return res.status(200).json("Instrutor excluído com sucesso!");
    } catch (error) {
        return res.status(400).json({message: "DELETE INSTRUTOR", error: error.message});  
    };
};