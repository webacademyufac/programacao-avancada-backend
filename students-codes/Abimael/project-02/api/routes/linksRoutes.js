const router = require("express").Router()

const Link = require('../models/Links')

// Create - Criação de dados
router.post('/', async (req,res)=>{
    
    // req.body
    const {name, url} = req.body

    if(!name){
        res.status(422).json({error: "O nome é obrigatório"})
        return
    }
    if(!url){
        res.status(422).json({error: "O url é obrigatório"})
        return
    }

    const link = {
        name,
        url
    }

    // create
    try{
        await Link.create(link)
        res.status(201).json({massage: "Deu certo"})
    }catch (error) {
        res.status(500).json({error:error})
    }
})

//  Read - leitura de dados
router.get('/',async (req, res)=>{

    try {
        const links = await Link.find()
        
        res.status(200).json(links)

    } catch (error) {
        res.status(500).json({error:error})
    }

})

router.get('/:id', async (req, res)=>{
    // Extrair o dado da requisição, pela url = req.params

    const id = req.params.id

    try {
        const link = await Link.findOne({_id:id})
        
        if(!link){
            res.status(422).json({message:"O usuário não foi encontrado!"})
            return
        }

        res.status(200).json(link)
    } catch (error) {
        res.status(500).json({error:error})
    }
})

// Update - atualização de dados (PUT,  PATCH)

router.patch('/:id', async (req, res)=>{

    const id = req.params.id

    const {name, url} = req.body

    const link = {
        name,
        url
    }
    try {
        const updateLink = await Link.updateOne({_id:id},link)

        if(updateLink.matchedCount === 0){
            res.status(422).json({message:"O usuário não foi encontrado!"})
            return
        }

        res.status(200).json(link)
    } catch (error) {
        res.status(500).json({error:error})
    }
})

// DELETE - deletar os dados

router.delete('/:id', async (req, res)=>{
    const id = req.params.id
    
    const link = await Link.findOne({_id:id})
    if(!link){
        res.status(422).json({message:"O usuário não foi encontrado!"})
        return
    }

    try {
        await Link.deleteOne({_id:id})

        res.status(200).json({message: 'Link removido com sucesso'})
    } catch (error) {
        res.status(500).json({error:error})
    }
})

module.exports = router