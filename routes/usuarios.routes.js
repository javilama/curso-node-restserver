const { Router } = require("express");
const {
  getUsuarios,
  postUsuarios,
  putUsuarios,
  patchUsuarios,
  deleteUsuarios,
} = require("../controllers/usuarios.controller");

const router = Router();

router.get("/", getUsuarios);

router.post("/", postUsuarios);

router.put("/:id", putUsuarios);

router.patch("/", patchUsuarios);

router.delete("/", deleteUsuarios);

module.exports = router;
