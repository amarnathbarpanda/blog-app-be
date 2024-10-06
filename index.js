import express from 'express';
import cors from 'cors';
import sequelize from './config/db.js';

const app = express();

const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
// app.use("/blogs")

sequelize
    .authenticate()
    .then(() => console.log("DB connected successfully!!"))
    .catch(err => console.log("Unable to connect to the database.", err));

app.listen(PORT, () => {
    console.log("Server is up and running!!!");
});