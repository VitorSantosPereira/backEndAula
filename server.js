import express from 'express'
import * as controller from './controller/contatosController.js';
import routerContatos from './routes/contatosRouter.js'

const Server = express()
Server.use(express.json())

//  1
const frutas = [
    { id: 1, nome: "Banana", cor: "Amarelo" },
    { id: 2, nome: "Uva", cor: "Roxo" },
    { id: 3, nome: "Maracujá", cor: "Amarelo" },
    { id: 4, nome: "Maçã", cor: "Vermelho" },
    { id: 5, nome: "Limão", cor: "Verde" },
]

Server.get('/frutas', (req, res) => {

    try {
        const nomeFrutas = frutas.map(p => p.nome)

        console.log(nomeFrutas)
        res.json(nomeFrutas)
    } catch (error) {
        console.log(error)
    }
})

Server.get('/frutas/:id', (req, res) => {


    try {
        const { id } = req.params;
        console.log("Váriavel id=", id, "tipo da variavel", typeof (id))

        const frutaEncontrada = frutas.find(p => p.id == Number(id))
        console.log(frutaEncontrada)

        if (!frutaEncontrada) {
            res.status(402).json({ erro: "fruta não foi encontrada!" })
        } else {

            res.status(200).json({ frutaEncontrada })
        }

    } catch (error) {
        console.log(error)
    }


})

//  2

const alunos = [
    { id: 1, nome: 'Gabriel', nota: 9 },
    { id: 2, nome: 'Jhamile', nota: 10 },
    { id: 3, nome: 'Matheus', nota: 7 }
]

Server.get('/alunos', (req, res) => {
    const nomeAlunos = alunos.map(p => p.nome)

    console.log(nomeAlunos)
    res.status(200).json(nomeAlunos)
})

Server.post('criarAluno', (req, res) => {
    try {
        const novoAluno = {
            id,
            nome,
            nota
        }
        alunos.push(novoAluno)

        res.status(200).json(alunos)
        console.log(alunos)

    } catch (error) {

        res.status(402).json({ erro: "Não foi possível adicionar um aluno" })
        console.log(error)
    }
})

// 3

// 4

Server.use('/contatos', routerContatos)

// 5

Server.get('/tarefas', controller.mostrarTarefas)

Server.post('/tarefas', controller.criarTarefa)

Server.listen(3000, () => {
    console.log('Servidor rodando em: http://localhost:3000')
})