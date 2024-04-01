//Importacion de Modulos
import express from "express"
import { dirname, join } from "path" 
import { fileURLToPath } from "url"
import indexRouters from './routes/index.js' 

//Const de direccionamiento
const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))
console.log(join(__dirname, 'views'));
//Set de Vistas
app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(indexRouters)
app.use(express.static(join(__dirname, 'public')))
//Escucha del Server
app.listen(3000)
console.log("App Online on Server port:", 3000);
