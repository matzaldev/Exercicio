const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

var alunos = [
    {
        ra: 12347,
        nome: 'Mateus',
        cursos: ['Desenvolvimento Web', 'Engenharia de Software', 'UX']
    },

    {
        ra: 14728,
        nome: 'Maria',
        cursos: ['Anatomia', 'Cistologia', 'Química']
    },
    {
        ra: 15673,
        nome: 'Antonia',
        cursos: ['História Geral', 'Antropologia', 'Museologia']
    }
];

// Usando o método Post para add um aluno via postman 

app.post('/add-aluno', (req, res) => {
    const {ra, nome, cursos} = req.body;
    alunos.push({ra, nome, cursos});
    res.send(alunos);
});

// usando o metodo post para add um curso via postman

app.post('/add-curso', (req, res) => {
    const { ra, cursos} = req.body;
    const aluno = alunos.find(a => a.ra === ra);
    aluno.cursos.push(cursos);
    res.send(aluno);
});

// usando metodo put para alterar os dados de um alunos atraves do ra via postman

app.put('/edit', (req, res) => {
    const { ra, nome } = req.body;
    const index = alunos.findIndex(x => x.ra == ra);
    alunos[index].nome = nome;
    res.send(alunos[index]);
});

// usando o metodo put para alterar o curso de um aluno atraves do ra via postman

app.put('/edit-curso', (req, res) => {
    const { ra, cursos } = req.body;
    const index = alunos.findIndex(x => x.ra == ra);
    alunos[index].cursos = cursos;
    res.send(alunos[index]);
});

// usando o metodo delete para remover um aluno da lista atraves do ra no postman
app.delete('/delete', (req, res) => {
    const {ra} = req.body.ra;
    const index = alunos.findIndex(x => x.ra == ra);
    alunos.splice(index, 1);
    res.send(alunos);
});

// usando o metodo delete para remover um curso de um aluno atraves do ra via postman
app.delete('/delete-curso', (req, res) => {
    const { ra, curso } = req.body;
    const aluno = alunos.find(x => x.ra == ra);
    const index = aluno.cursos.findIndex(x => x == curso);
    aluno.cursos.splice(index, 1);
    res.send(aluno);
});

// usando o metodo get para listar todos os alunos
app.get('/get', (req, res) => {
    res.send(alunos);
});

// usando o metodo get para listar um aluno atraves do ra via postman
app.get('/get-ra', (req, res) => {
    const ra = req.body.ra;
    const aluno = alunos.find(x => x.ra == ra);
    res.send(aluno);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})