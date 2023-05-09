import { CreateSpecificationController } from "@modules/Cars/UseCases/createSpecification/CreateSpecificationController";
import { Router } from "express";


const createSpecificationController = new CreateSpecificationController();

const specificationsRoutes = Router();


specificationsRoutes.post("/", createSpecificationController.handle)

export { specificationsRoutes }