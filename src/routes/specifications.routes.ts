import { Router } from "express";
import { CreateSpecificationController } from "../modules/Cars/UseCases/createSpecification/CreateSpecificationController";


const createSpecificationController = new CreateSpecificationController();

const specificationsRoutes = Router();


specificationsRoutes.post("/", createSpecificationController.handle)

export { specificationsRoutes }