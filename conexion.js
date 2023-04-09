const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin123@ecommerce.n2trqpr.mongodb.net/restaurant?retryWrites=true&w=majority');

const objetodb = mongoose.connection;

objetodb.on('connected', () => {
    console.log("conecto");
})

objetodb.on('error', () => {
    console.log("no conecto");
})

module.exports = mongoose
