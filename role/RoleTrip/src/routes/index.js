import express from "express";
import viajanteroute from './viajanteroute.js'; // Importa o arquivo de rotas de produtos
import malaroute from './malaroute.js'; // Importa o arquivo de rotas de ferramentas elétricas

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ title: "Viagem organizada" }); // Resposta padrão para a rota raiz
  });

  app.use(express.json(),viajanteroute,malaroute); // Aqui você define o prefixo da rota

};

export default routes;
