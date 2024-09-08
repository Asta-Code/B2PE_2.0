import { userRegisterExpect, usersGet } from "../controllers/user_controller";

const { Router } = require('express');



const router = Router();

router.post('/register',userRegisterExpect );
// Crear una ruta para traer todos los users con store procedure 
router.get('/users', usersGet )


module.exports = router;