import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, 'Erro de conexão'));
db.once("open", () => {
    console.log('Conexão com o banco feita com sucesso')
})

const app = express();
app.use(express.json()); //recurso para interpretar o que ta chegando via post/put como um objeto para podermos manipular
routes(app);

export default app;