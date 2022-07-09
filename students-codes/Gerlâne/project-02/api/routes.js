/*
Código das rotas do endpoint da api para conexão com o frontend
*/

const express = require('express');

/*
Variáveis para manipulação do banco de dados através da controller (controllFav) e model (fav)
*/
const controllFav = require('./controllers/favController');
const fav = require('./models/fav');

/*
Endpoints de acesso para conexão com a parte frontend da aplicação
*/
const routes = new express.Router();

/*
Endpoint get / que pega todas as instâncias presentes no banco de dados e as envia para o frontend
*/
routes.get('/', async (req, res, next) =>{
    try{
       const data = await fav.find({}).lean();
       res.send(data); 
    }catch (err){
        console.log(err);
        return res.sendStatus(500);
    }
    next();
});

/*
Endpoint post /register que salva os dados no banco de dados
*/
routes.post('/register', controllFav.register);

/*
Endpoint delete /delete/:id que recebe o id pelos parametros e utiliza um método nativo
(findOneAndDelete) para deletar a instância do banco de dados
*/
routes.delete('/delete/:id', async (req, res, next) => {
    try{
        const { id } = req.params;
        fav.findOneAndDelete({ _id: id }, () => {
            return res.sendStatus(200);
        });
          
    }catch (err){
        console.log(err);
        return res.sendStatus(500);
    }
});

/*
Exporta todas as rotas
*/
module.exports = routes;