/*
Código da criação do modelo a ser manipulado no banco de dados
*/

const mongoose = require('mongoose');

/*
Criação da estrutura do schema que será enviado como entidade do banco de dados
nome: obrigatório, tipo string
url: obrigatório, tipo string
*/
const FavSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Favorito', FavSchema);