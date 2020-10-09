const axios = require("axios");
const cron = require("node-cron");
const time = require("../../time");

const Conversor = require("../../../models/conversor");
// Our DB Configuration
require('../../../database');

/*
cron.schedule("  * * * * *", () => {
    
        getUF();
});
*/

//const getUF = () => {

    let hace = 30;

    for(let i = hace; i>0;i--){
        let fecha_desde = time.haceXdias(new Date(),i,'-');

        //console.log(fecha_desde);
        let apiUrl1 = 'https://mindicador.cl/api/uf/'+fecha_desde;
        let apiUrl2 = 'https://mindicador.cl/api/dolar/'+fecha_desde;

        const req1 = axios.get(apiUrl1);
        const req2 = axios.get(apiUrl2);
        //console.log(new Date("2020-03-15"))

        Promise.all([req1, req2]).then(responses  => {

            //console.log(responses[0].data.serie[0]);
            var uf = responses[0].data.serie[0].valor;
            var usd = responses[1].data.serie[0].valor;
            var date = new Date("2020-03-15");

            let c = {usd, uf, date}

            var conversor = new Conversor(c)

            conversor.save((err, result) => {
                if (err) {
                    console.log('Conversor CREATE ERROR ', err);
                }
                console.log(result)
            });
          }).catch(errors => {
            //return errors
        })
    }

//}
