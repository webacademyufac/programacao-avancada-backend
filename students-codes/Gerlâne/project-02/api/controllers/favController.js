/*
Código da camada de controle da interação com o banco de dados
*/

const fav = require('../models/fav');

/*
Função async register, faz o registro das entidades, no modelo definido no arquivo fav.js, no banco de dados
*/
module.exports = {
    async register (req, res, next) {
        const { nome, url} = req.body;

        const newFav = new fav();

        newFav.nome = nome;
        newFav.url = url;

        newFav.save((err, saveFav) => {
            if(err) {
                console.log(err);
                return res.status(500).send('Erro ao salvar favorito');
            }
            return res.status(200).send(saveFav);
        });
    }
}