const {Schema,model}=require('mongoose');
const ProductoSchema=Schema({
    nombre:{
        type:String,
        unique:true,
        required:[true,'el nombre es obligatorio']
    },
    categoria:{
        type:String,
        required:true
    },
    ubicacion:{
        type:String,
        required:true
    },
    precio:{
        type:Number,
        required:true
    },
    fechacreacion:{
        type:Date,
        default:Date.now()
    }
});
//quitar datos
ProductoSchema.methods.toJSON=function(){
    const{__v,...users}=this.toObject();
    
    return users
}
module.exports=model('Producto',ProductoSchema);