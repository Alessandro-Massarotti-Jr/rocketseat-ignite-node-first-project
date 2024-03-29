import { CreateUserController } from "@modules/Accounts/useCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "@modules/Accounts/useCases/updateUserAvatar/UpdateUserAvatarController";
import { Router } from "express";
import uploadConfig from "@config/upload";
import multer from "multer";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";


const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRoutes.post("/", createUserController.handle);

usersRoutes.patch("/avatar", ensureAuthenticated, uploadAvatar.single("avatar"), updateUserAvatarController.handle);



export { usersRoutes }