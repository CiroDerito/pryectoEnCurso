import { Sequelize } from "sequelize";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { config } from "dotenv";

config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sequelize = new Sequelize(
  `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/medicalweb`,
  {
    logging: false,
    native: false,
  }
);

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(import(path.join(__dirname, "/models", file)));
  });

const setupModels = async () => {
  const models = await Promise.all(modelDefiners);
  models.forEach((model) => model(sequelize));

  let entries = Object.entries(sequelize.models);
  let capsEntries = entries.map((entry) => [
    entry[0][0].toUpperCase() + entry[0].slice(1),
    entry[1],
  ]);
  sequelize.models = Object.fromEntries(capsEntries);

  const { User, Appointment } = sequelize.models;

  User.belongsToMany(Appointment, { through: "Intermediate" });
  Appointment.belongsToMany(User, { through: "Intermediate" });
};

await setupModels();

try {
  await sequelize.authenticate();
  console.log("Connection to the database has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

export default sequelize;
