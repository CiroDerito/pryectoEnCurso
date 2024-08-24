import express from 'express';
import userRoutes from './routes/index';
import sequelize from './configs/database';
import errorHandler from './middlewares/errorHandler';
import router from './routes/index';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', router);
app.use(errorHandler);


sequelize
  .authenticate()
  .then(() => {
    console.log('Conectado a la base de datos PostgreSQL.');
    return sequelize.sync(); 
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((error: Error) => {
    console.error('Error al conectar con la base de datos:', error);
  });