/*id": "6022",
"number": "6006",
"client_id": "387",
"project_code": "000382-0002",
"comment": "Juicio accidente Petit con Melipilla Norte",
"subtotal_without_discount": "1423771",
"type_code": "FA",
"currency_symbol": "CLP",
*/
const mongoose = require('mongoose');

var facturaSchema = new mongoose.Schema({
    idApi: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        maxlength: 2000
    },
    number: {
        type: Number,
        required: true
    },
    projectCode: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    currency: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },

  })

  module.exports = mongoose.model("Factura", facturaSchema);