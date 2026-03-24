import * as module from '../modules/livroModel.js'

export async function listarlivros(req, res) {

    const lista = await module.listarlivrosBD()
    res.status(200).json(lista)

}