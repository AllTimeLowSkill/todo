require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { sequelize } = require("./db.config");
const router = require("./controllers/todo.controller");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/todo", router);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(process.env.APP_PORT, () => {
      console.log(`Server has been strted on port: ${process.env.APP_PORT}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
