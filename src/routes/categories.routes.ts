import { Router } from "express";
import { CategoriesRepository } from "../modules/Cars/repositories/CategoriesRepository";
import { createCategoryController } from "../modules/Cars/UseCases/createCategory";


const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();


categoriesRoutes.post("/", (req, res) => {
    return createCategoryController.handle(req, res);
});

categoriesRoutes.get("/", (req, res) => {
    const all = categoriesRepository.list();
    return res.status(200).json(all);
})

export { categoriesRoutes }