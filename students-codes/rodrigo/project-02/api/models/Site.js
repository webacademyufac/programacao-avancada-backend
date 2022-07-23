const mongoose = require('../database');

const SiteSchema = mongoose.Schema({
    name: {
        type: 'string',
        required: true,
        unique: true,
    },
    url: {
        type: 'string',
        required: true,
        loweredCase: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Site = mongoose.model('Site', SiteSchema);

module.exports = Site;