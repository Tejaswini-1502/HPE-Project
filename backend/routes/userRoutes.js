import express from "express";
import { authUser, registerUser, getUserProfile  } from "../controllers/userController.js";

const router = express.Router()


router.route('/').post(registerUser)
router.post('/login',authUser)
router.route('/profile').get(getUserProfile)


export default router