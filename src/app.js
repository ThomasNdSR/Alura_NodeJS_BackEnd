import express from "express";
import db from "./config/dbConnect.js";
import livros from "./models/Livro.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, 'Erro de conexão'));
db.once("open", () => {
    console.log('Conexão com o banco feita com sucesso')
})

const app = express();

app.use(express.json()); //recurso para interpretar o que ta chegando via post/put como um objeto para podermos manipular

routes(app);

app.get('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id); //id enviado no endpoint
    res.json(livros[index]);
})

app.post('/livros', (req, res) => {
    livros.push(req.body); /*adicionar o conteúdo do corpo da requisição no array livros.*/
    res.status(201).send('Livro foi cadastrado com sucesso');
})

app.put('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo; /*titulo enviado pelo corpo da requisição */
    res.json(livros);
})

app.delete('/livros/:id', (req, res) => {
    let { id } = req.params;
    let index = buscaLivro(id);
    livros.splice(index, 1)
    res.send('Livro removido com sucesso')
})

function buscaLivro(id) {
    return livros.findIndex(livro => livro.id == id);
}

export default app;