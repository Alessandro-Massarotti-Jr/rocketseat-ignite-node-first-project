import { Router } from "express";
import multer from "multer";
import createCategoryController from "../modules/Cars/UseCases/createCategory";
import { importCategoryController } from "../modules/Cars/UseCases/importCategory";
import { listCategoriesController } from "../modules/Cars/UseCases/listCategories";

const categoriesRoutes = Router();

const upload = multer({
    dest: "./tmp"
});

categoriesRoutes.post("/", async (req, res) => {
    return await createCategoryController().handle(req, res);
});

categoriesRoutes.get("/", (req, res) => {
    return listCategoriesController.handle(req, res);
})

categoriesRoutes.post("/import", upload.single("file"), (req, res) => {
    return importCategoryController.handle(req, res);
})

export { categoriesRoutes }