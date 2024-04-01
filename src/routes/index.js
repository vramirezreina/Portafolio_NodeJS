import { Router } from "express"
const router = Router()
//Enrutamiento
router.get('/', (req, res) => res.render('index', { title: 'VRReina'}))
router.get('/contact', (req, res) => res.render('contact', { title: 'VRReina'}))

export default router