const mongoose = require("mongoose")

const Link = mongoose.model("Link", {
    name: String,
    url: String
})


module.exports = Link
