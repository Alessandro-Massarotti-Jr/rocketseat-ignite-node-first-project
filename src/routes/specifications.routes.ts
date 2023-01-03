import { Router } from "express";
import { SpecificationsRepository } from "../modules/Cars/repositories/implementations/SpecifictionsRepository";
import { CreateSpecificationService } from "../modules/Cars/services/CreateSpecificationService";

const specificationsRoutes = Router();

const SpecificationsReposytory = new SpecificationsRepository();

specificationsRoutes.post("/", (req, res) => {

    const { name, description } = req.body;

    const createSpecificationService = new CreateSpecificationService(SpecificationsReposytory);
    createSpecificationService.execute({ name, description });

    return res.status(201).send();

})

export { specificationsRoutes }