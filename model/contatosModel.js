let contatos = [
  { id: 1, nome: "João", telefone: "48999999999", email: "joao@email.com" },
  { id: 2, nome: "Maria", telefone: "48988888888", email: "maria@email.com" },
  { id: 3, nome: "Carlos", telefone: "48977777777", email: "carlos@email.com" },
  { id: 4, nome: "Ana", telefone: "48966666666", email: "ana@email.com" },
  { id: 5, nome: "Pedro", telefone: "48955555555", email: "pedro@email.com" },
  { id: 6, nome: "Lucas", telefone: "48944444444", email: "lucas@email.com" },
  { id: 7, nome: "Juliana", telefone: "48933333333", email: "juliana@email.com" },
  { id: 8, nome: "Fernando", telefone: "48922222222", email: "fernando@email.com" },
  { id: 9, nome: "Patrícia", telefone: "48911111111", email: "patricia@email.com" },
  { id: 10, nome: "Rafael", telefone: "48900000000", email: "rafael@email.com" }
];
let tarefas = [
  { id: 1, titulo: "Estudar JavaScript", concluida: false },
  { id: 2, titulo: "Fazer exercícios", concluida: true },
  { id: 3, titulo: "Ler documentação", concluida: false },
  { id: 4, titulo: "Criar API", concluida: true },
  { id: 5, titulo: "Testar endpoints", concluida: false },
  { id: 6, titulo: "Arrumar bugs", concluida: false },
  { id: 7, titulo: "Commit no Git", concluida: true },
  { id: 8, titulo: "Estudar Node.js", concluida: false },
  { id: 9, titulo: "Revisar código", concluida: true },
  { id: 10, titulo: "Deploy do projeto", concluida: false }
];
export function listarContatos() {
  return contatos;
}
export function listaTarefas() {
  return tarefas;
}

export function buscarContatoID(id) {
  const resultBusca = contatos.find(cont => cont.id == id)
  return resultBusca;
}

export function cadastrarContato(nome, telefone, email) {
  const novoContato = {
    id: contatos.length + 1,
    nome: nome,
    telefone: telefone,
    email: email
  }
  contatos.push(novoContato)
  return novoContato

}

export function mudandoLista(id, nome, telefone, email) {

  const novoDado = {
    id: id,
    nome: nome,
    telefone: telefone,
    email: email
  }

  const i = contatos.findIndex(troca => troca.id == novoDado.id);

  if (i != -1) {
    contatos[i] = novoDado
    return contatos
  }
}

export function deletarDaLista(id) {

  const i = Number(id)
  const index = i - 1

  contatos.splice(index, 1)
  return contatos

}
export function cadastrarTarefa(titulo, concluida) {
  const novaTarefa = {
    id: contatos.length + 1,
    titulo: titulo,
    concluida: concluida
  }
  tarefas.push(novaTarefa)
  return novaTarefa
}
