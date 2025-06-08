import express from 'express';
import conectiondatabase from './config/dbconect.js'; // Importando a função de conexão com o banco de dados
import Routes from './routes/index.js'; // Importando as rotas
import cors from 'cors'; // Importando o middleware CORS
//import ManipuladorDeErros from './middleware/manipuladoDeErros.js';

const conection = await conectiondatabase(); // Conectando ao banco de dados MongoDB

conection.on('error', (err) => {
    console.error('Erro de conexão:', err);

});
conection.once("open", () => {
    console.log("Banco de dados conectado com sucesso!");
}
);

const app = express();
app.use(cors());
Routes(app);
 

//app.use(ManipuladorDeErros)

export default app; 