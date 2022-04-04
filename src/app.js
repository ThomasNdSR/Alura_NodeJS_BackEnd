import express from "express";

const app = express();

app.use(express.json()); //recurso para interpretar o que ta chegando via post/put como um objeto para podermos manipular

const livros = [
    { id: 1, "titulo": "Senhor dos Aneis" },
    { id: 2, "titulo": "O Hobbit" }
]

app.get('/', (req, res) => {
    res.status(200).send('Curso de Node');
})

app.get('/livros', (req, res) => {
    res.status(200).json(livros);
})

app.post('/livros', (req, res) => {
    livros.push(req.body); /*adicionar o conteúdo do corpo da requisição no array livros.*/
    res.status(201).send('Livro foi cadastrado com sucesso');
})

export default app;