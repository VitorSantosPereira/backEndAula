// CREATE TABLE contatos(
// id SERIAL PRIMARY KEY,
// nome VARCHAR(100) NOT NULL,
// telefone VARCHAR(20),
// email VARCHAR(100) not null UNIQUE
// );

// INSERT INTO contatos (nome, telefone, email) VALUES
// ('Gabriel Velha', '48921413783', 'GabrielaVV@gmail.com'),
// ('Lucas Almeida', '41991234567', 'lucas.almeida@email.com'),
// ('Fernanda Costa', '41992345678', 'fernanda.costa@email.com'),
// ('Rafael Gomes', '41993456789', 'rafael.gomes@email.com'),
// ('Juliana Martins', '41994567890', 'juliana.martins@email.com'),
// ('Bruno Rocha', '41995678901', 'bruno.rocha@email.com'),
// ('Camila Ribeiro', '41996789012', 'camila.ribeiro@email.com'),
// ('Diego Fernandes', '41997890123', 'diego.fernandes@email.com'),
// ('Patricia Alves', '41998901234', 'patricia.alves@email.com'),
// ('Gustavo Carvalho', '41999012345', 'gustavo.carvalho@email.com'),
// ('Aline Barros', '41990123456', 'aline.barros@email.com'),
// ('Thiago Moreira', '41991239876', 'thiago.moreira@email.com'),
// ('Renata Teixeira', '41992348765', 'renata.teixeira@email.com'),
// ('Felipe Cardoso', '41993457654', 'felipe.cardoso@email.com'),
// ('Mariana Batista', '41994566543', 'mariana.batista@email.com'),
// ('Eduardo Freitas', '41995675432', 'eduardo.freitas@email.com'),
// ('Larissa Nunes', '41996784321', 'larissa.nunes@email.com'),
// ('Rodrigo Moura', '41997893210', 'rodrigo.moura@email.com'),
// ('Beatriz Farias', '41998902109', 'beatriz.farias@email.com'),
// ('André Lopes', '41999021098', 'andre.lopes@email.com'),
// ('Vanessa Duarte', '41990120987', 'vanessa.duarte@email.com');

import pg from 'pg';

const {Pool} = pg;

 const pool = new Pool({
     user: 'senha',
    host: 'localhost',
    database: 'UClinica',
    password: 'senha',
    port: 5433

});

export default pool

