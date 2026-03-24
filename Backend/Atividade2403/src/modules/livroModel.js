import pool from '../database/db.js'

export async function listarlivrosBD() {
  try {
    
     const result = await pool.query('SELECT * FROM livros');
     return result.rows
     
  } catch (e) {
    console.log("Erro ao consultar banco de dados:", e)
    return e
  }
}