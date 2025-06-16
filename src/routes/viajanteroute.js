import express from 'express';
import viajantesController from '../controllers/viajanteController.js';

const routes = express.Router();
routes.get('/viajantes', viajantesController.listarViajantes); // Rota para listar malas
routes.post('/viajantes', viajantesController.postarViajante); // Rota para criar uma nova mala
routes.put('/viajantes/:id', viajantesController.atualizarViajante); // Rota para atualizar uma mala existente
routes.delete('/viajantes', viajantesController.deletarViajante); // Rota para deletar uma mala  

export default routes;