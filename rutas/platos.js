const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const eschema = mongoose.Schema;

const eschemaPlato = new eschema({
    id: String,
    name: String,
    dsc: String,
    img: String,
    price: String

})

const ModeloPlato = mongoose.model('platos', eschemaPlato);

module.exports = router;

router.get('/getPlatos', async (req, res) => {
    var platos = await ModeloPlato.find({})
    console.log("platos",platos)
    res.send(platos);
});