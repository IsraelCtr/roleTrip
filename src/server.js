import "dotenv/config"; // Importando o dotenv para variáveis de ambiente
// Importing the http module
import app from './app.js'; // Importando o app do arquivo app.js
import cors from 'cors';



app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
  exposedHeaders: ['Authorization', 'X-Total-Count'],
  credentials: true // Se estiver usando autenticação com cookies/tokens
}));

// Rota de teste
app.get('/api/test', (req, res) => {
  res.json({ 
    success: true,
    message: 'CORS configurado corretamente!',
    timestamp: new Date().toISOString()
  });
});

const hostname = 'roleTrip';
const port = process.env.PORT || 3000;




app.listen(port, hostname, () => {
    console.log(`Server runing in http://${hostname}:${port}/`);
});