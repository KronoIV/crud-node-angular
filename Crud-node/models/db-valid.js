const Producto=require('../models/Producto')
const nombrevalid=async(nombre='')=>{
    const nom=await Producto.findOne({nombre})
    if (nom){
        throw new Error(`El Producto: ${nombre}, ya está registrado`);
    }
}
module.exports=nombrevalid;