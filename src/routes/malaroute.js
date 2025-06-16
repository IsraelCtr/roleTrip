import express from 'express';
import MalaController from '../controllers/malacontroller.js'; // Importando o controlador de malas

const routes = express.Router();
routes.get('/malas', MalaController.listarMalas); // Rota para listar malas
routes.post('/malas', MalaController.postarMala); // Rota para criar uma nova mala
routes.put('/malas/:id', MalaController.atualizarMala); // Rota para atualizar uma mala existente
routes.delete('/malas', MalaController.deletarMala); // Rota para deletar uma mala  

export default routes;