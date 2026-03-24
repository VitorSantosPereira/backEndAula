import { Router } from "express";
import * as controller from '../controller/livrosController.js';

const routerLivros = Router()

routerLivros.get('/', controller.listarlivros)


export default routerLivros;