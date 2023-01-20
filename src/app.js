import  Express from "express"
import {pool} from './db.js'
import {PORT} from './config.js'
//la creacion de la aplicacionweb en Nodejs con express
const app = Express()
//el puerto de nuestra aplicacion web va a  ser el 3000
app.listen (PORT)
console.log('servidor en el puerto 3000')

app.get ('/', (req,res) => {
    res.send ('SELECT * from users')
})

app.get ('/ping', async(req,res) => {
   const result = await pool.query (`SELECT "Hola Lucas" AS RESULT`)
   console.log (result[0])
})

app.get ('/create', async(req,res) => {
    const insert =  await pool.query (`INSERT INTO users(name) VALUES ("Lucas")`)
   console.log (insert)
 })