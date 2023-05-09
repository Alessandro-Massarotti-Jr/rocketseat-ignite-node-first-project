import { AuthenticateUserController } from "@modules/Accounts/useCases/authenticateUser/AuthenticateUserController";
import { Router } from "express";


const authenticateRoutes = Router();

const authenticateUserController = new AuthenticateUserController();

authenticateRoutes.post("/", authenticateUserController.handle)



export { authenticateRoutes }