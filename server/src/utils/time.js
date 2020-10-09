exports.haceXdias = (date, offset, operator) => {

   if(operator == '+'){
       date.setDate(date.getDate() + offset); 
   } else if(operator == '-'){
       date.setDate(date.getDate() - offset); 
   }
   d = date;
   
   if(d.getMonth() < 10){
       month = '0'+d.getMonth()
   }
    return d.getDate()+'-'+month+'-'+d.getFullYear();
};
https://mindicador.cl/
exports.hoy = () => {
    return new Date();
}