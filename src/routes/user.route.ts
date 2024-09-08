import { userRegisterExpect } from "../controllers/user_controller";

const { Router } = require('express');



const router = Router();

router.post('/register',userRegisterExpect );




module.exports = router;