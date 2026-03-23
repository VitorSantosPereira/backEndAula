import { Router } from "express";
import * as controller from '../controller/contatosController.js';

const routerContatos = Router()

routerContatos.get('/', controller.listar)

routerContatos.get('/:id', controller.buscarPorId)

routerContatos.post('/criar', controller.criarContato)

routerContatos.put('/trocar', controller.atualizarContato)

routerContatos.delete('/deletar/:id', controller.deletarMeliante)

export default routerContatos