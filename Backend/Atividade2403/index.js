import express from "express";
import Router from './src/router/livrosRouter.js'
import 'dotenv/config';

const Servidor = express()
Servidor.use(express.json())

Servidor.use('/livros', Router);



const PORT = process.env.SERVER_PORT;

Servidor.listen(PORT, () => {
    console.log('Servidor rodando em: http://localhost:3000');
})