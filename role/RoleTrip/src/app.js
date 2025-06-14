import express from 'express';
import conectiondatabase from './config/dbconect.js'; 
import Routes from './routes/index.js'; 
import cors from 'cors'; 


const conection = await conectiondatabase(); 

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