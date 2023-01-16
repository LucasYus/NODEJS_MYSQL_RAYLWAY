import  Express from "express"
import {pool} from './db.js'
import {PORT} from './config.js'
//la creacion de la aplicacionweb en Nodejs con express
const app = Express()
//el puerto de nuestra aplicacion web va a  ser el 3000
app.listen (3000)
console.log('servidor en el puerto 3000')

app.get ('/', (req,res) => {
    res.send ("Implantacion aplicaciones web2")
})

app.get ('/ping', async(req,res) => {
   const result = await pool.query ('SELECT * from userdb.users')
   console.log (result[0])
})

app.get ('/create', async(req,res) => {
    const insert =  await pool.query (`INSERT INTO userdb.users(name) VALUES ("Lucas")`)
   console.log (insert)
 })