
 /*   const cron = require('node-cron');
    cron.schedule('* * * * * *', () => {
        console.log('Corriendo el cron con el dato: ');
        
    });

*/
const axios = require("axios");
const cron = require("node-cron");

// Our DB Configuration
require('./src/database');

    
getFacturas(1);


const getFacturas = (page) => {
    axios.get(
        `http://bsvv.thetimebilling.com/time_tracking/api/v2/billing_documents?page=`+page,{
            headers: {
                'AUTHTOKEN': 'ebe396e2c72f8b039f52e9e0031ff296a458d2b2' 
            }
        }).then((facturas) => {
            
            console.log("########### Page number: ##############");
            facturas.data.forEach(factura => {
                id = factura['id'];

                axios.get(
                    `http://bsvv.thetimebilling.com/time_tracking/api/v2/billing_documents/`+id,{
                        headers: {
                            'AUTHTOKEN': 'ebe396e2c72f8b039f52e9e0031ff296a458d2b2' 
                        }
                    }).then((facturaDetail) => {
                        
                            
                        //id = factura['id'];
                        console.log(facturaDetail.data);

                       /*id": "6022",
                        "number": "6006",
                        "client_id": "387",
                        "project_code": "000382-0002",
                        "comment": "Juicio accidente Petit con Melipilla Norte",
                        "subtotal_without_discount": "1423771",
                        "type_code": "FA",
                        "currency_symbol": "CLP",
                        */
                        const factura = facturaDetail.data
                        const id = factura['id'];
                        const number = factura['number'];
                        const projectCode = factura['project_code'];
                        const comment = factura['comment'];
                        const amount = factura['subtotal_without_discount'];
                        const type = factura['type_code'];
                        const currency = factura['currency_symbol'];


                        //Process amount with data inside conversor collection!
                        //To do...

                        
                        const fields = {id,number,projectCode,comment,amount,type,currency};
                        const newFactura = new Factura(fields);

                        newFactura.save()

                        newFactura.save((err, result) => {
                            if (err) {
                                console.log('Factura CREATE ERROR ', err);
                                
                            }
                            console.log(result);
                        });

                    }, (error) => {
                        console.log(error)
                    })
                
                console.log('#################################');
            });

            

        }, (error) => {
            console.log(error)
        })
}

