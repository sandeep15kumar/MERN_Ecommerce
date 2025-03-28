import express from 'express'
import { registerController , loginController, testController } from '../controllers/authController.js';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
  
//Router object
const route = express.Router()

route.post('/register' ,registerController )
route.post('/login', loginController)

//test routes
route.get('/test', requireSignIn, isAdmin, testController)

 

export default route;
    


