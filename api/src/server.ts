import express, { request, response } from 'express';

const app = express();

//Pegar alguma informação
app.get("/get", (request, response) => {
    return response.json("hello");
});

// Receber alguma informação
// Salvar os dados
app.post("/post",(request, response) => {
    return response.json("Os dados foram salvos com sucesso");
});

app.listen(5353, () => console.log("Server is running!"))