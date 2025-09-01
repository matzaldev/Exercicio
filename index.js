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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})