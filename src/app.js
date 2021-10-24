const express = require('express')
const app = express()
const port = 3000
// Rutas
app.get('/producto/findAll', (req, res) => res.send('Todos los registros'))

app.get('/producto/findById/:id', (req, res) =>{
    const recibidaId = req.params.id
    res.send('Busco por ID: ' + recibidaId)}
 )

 app.post('/producto/create', (req, res) => res.send('Cree un nuevo registro'))

 app.put('/producto/edit/:id', (req, res) => res.send('Edité un nuevo registro'))


 app.delete('/producto/deleteById/:id', (req, res) =>{
    const recibidaId = req.params.id
    res.send('Elimino por ID: ' + recibidaId)}
 )






app.listen(port, () => console.log(`Estamos probando desde el main las rutas!`))