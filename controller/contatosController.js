import * as module from '../model/contatosModel.js'

export function listar(req, res) {

    const todaLista = module.listarContatos()
    res.status(200).json(todaLista)

}

export function buscarPorId(req, res) {
    const { id } = req.params;
    const resultadoContato = module.buscarContatoID(id)
    if (!resultadoContato) {
        res.status(404).json({ erro: "Usuário não existe" })
    } else {
        res.status(200).json(resultadoContato);
    }
}
export function criarContato(req, res) {
    const { nome, telefone, email } = req.body

    if (!nome || !telefone || !email) {
        res.status(422).json({ mensagem: "Dados incompletos" })
    } else {
        const novoContato = module.cadastrarContato(nome, telefone, email)
        res.status(201).json(novoContato);
    }
}
export function atualizarContato(req, res) {

    const { id, nome, telefone, email } = req.body

    if (!id || !nome || !telefone || !email) {
        res.status(422).json({ mensagem: "Dados incompletos" })
    } else {
        const atualizandoLista = module.mudandoLista(id, nome, telefone, email)
        res.status(200).json(atualizandoLista);
    }
}

export function deletarMeliante(req, res) {

    const { id } = req.params

    if (!id) {
        res.status(422).json({ mensagem: "Erro ao deletar" })
    } else {
        const sucessoAoDeletar = module.deletarDaLista(id)
        res.status(200).json(sucessoAoDeletar);
    }
}


export function mostrarTarefas(req, res) {

    const todaListaDeTarefas = module.listaTarefas()
    res.status(200).json(todaListaDeTarefas)

}

export function criarTarefa(req, res) {
    const { titulo, concluida } = req.body

    if (!titulo || !concluida) {
        res.status(422).json({ mensagem: "Dados incompletos" })
    } else {
        const novaTarefa = module.cadastrarTarefa(titulo, concluida)
        res.status(201).json(novaTarefa);
    }
}
export async function listarBD(req, res) {

    const todaListaBD = await module.listarContatosBD()
    res.status(200).json(todaListaBD)

}
