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

app.post('/', (req, res) => {
    const {ra, nome, cursos} = req.body
    alunos.push({ra, nome, cursos})
    res.send(alunos)
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})