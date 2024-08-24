import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('MedicalDB', 'usuario', 'contraseña', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false, 
});

export default sequelize;
