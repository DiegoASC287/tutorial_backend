import { Router } from "express";

const router = Router()

router.get('/', (req, res) => {
    return res.send('olá dev')
})
router.post('/teste', (req, res) => {

    console.log(req.query.teste)
    return res.status(201).json(req.body)
})

export {router}