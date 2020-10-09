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

var conversorSchema = new mongoose.Schema({
    usd: {
        type: Number
    },
    uf: {
        type: Number
    },
    
    date: {
        type: Date,
        required: true
    },

  })

  module.exports = mongoose.model("Conversor", conversorSchema);