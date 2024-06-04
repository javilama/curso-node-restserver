const { Router } = require('express');
const { check } = require('express-validator');

const {validarCampos} = require('../middlewares/validar-campos');
const { esRoleValid, emailExist, userByIdExist } = require('../helpers/db-validators');


const {
  getUsuarios,
  postUsuarios,
  putUsuarios,
  patchUsuarios,
  deleteUsuarios,
} = require("../controllers/usuarios.controller");

const router = Router();

router.get("/", getUsuarios);
//POST
router.post("/",[
   check('name', 'El nombre es obligatorio').not().isEmpty(),
   check('email', 'Ingrese un email valido').isEmail(),
   check('email').custom(emailExist),
   check('password', 'Ingrese una contraseña, debe tener más de 6 caracteres').isLength({ min: 6}),
   //check('role', 'El rol ingresado no está permitido').isIn(['ADMIN_ROLE','USER_ROLE']),
   check('role').custom(esRoleValid),
   validarCampos
] ,postUsuarios);

//PUT
router.put("/:id",[

  check('id', 'No es un ID válido').isMongoId(),
  check('id').custom(userByIdExist),
  check('role').custom(esRoleValid),
  validarCampos

],putUsuarios);

router.patch("/", patchUsuarios);

router.delete("/:id", [
  check('id', 'No es un ID válido').isMongoId(),
  check('id').custom(userByIdExist),
  validarCampos
], deleteUsuarios);

module.exports = router;
