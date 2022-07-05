const router = require('express').Router()
const fav = require('../models/Link')

router.post('/', async (req, res) => {
    const { name, url } = req.body

    if(!name || !url){
        res.status(422).json({ error: 'Os campos são obrigatórios' })
        return
    }

    const link = {
        name,
        url,
    }

    try {
        await fav.create(link)
        res.status(201).json({ message: 'Link inserido no sistema com sucesso!' })
    } catch(error) {
        res.status(500).json({ error: error })
    }
})

router.get('/', async (req, res) => {
    try {
        const link = await fav.find({}).lean()
        res.status(200).json(link)
    } catch (error) {
        return res.sendStatus(500).json({ error: error })
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id

    const link = await fav.findOne({ _id: id })

    if(!link) {
        res.status(422).json({ message: 'O link não foi encontrado!' })
        return
    }

    try {
        await fav.deleteOne({ _id: id })
        res.status(200).json({ message: 'Link removido com sucesso! '})
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

module.exports = router