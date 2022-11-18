const {Router}=require('express')
const {check}=require('express-validator');
const {obtenerproducto,crearproducto, atulizarproducto, categoriaid, categoriadelete} = require('../controllers/productocontrol');
const nombrevalid = require('../models/db-valid');
const router=Router()

//api/producotos
router.post('/',[
    check('nombre','el nombre es obligatorio').not().isEmpty(),
    check('nombre').custom(nombrevalid)
],crearproducto)
router.get('/',obtenerproducto)
router.put('/:id',atulizarproducto)
router.get('/:id',categoriaid)
router.delete('/:id',categoriadelete)




module.exports=router;