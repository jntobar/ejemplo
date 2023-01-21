import { Router } from "express";
import { getRegistro, postRegistro, putRegistro, delRegistro, getRegistro_Un } from "../controllers/registro.controller.js"

const router = Router()



router.get("/registro",getRegistro) // obtener todos los usuarios
router.get("/registro/:id",getRegistro_Un) // obtener usuario con id
router.post("/registro",postRegistro) // crear 
router.patch("/registro/:id",putRegistro) // actualizar 
router.delete("/registro/:id",delRegistro) // eliminar



export default router