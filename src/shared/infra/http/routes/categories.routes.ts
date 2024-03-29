import { CreateCategoryController } from "@modules/Cars/UseCases/createCategory/CreateCategoryController";
import { ImportCategoryController } from "@modules/Cars/UseCases/importCategory/ImportCategoryController";
import { ListCategoriesController } from "@modules/Cars/UseCases/listCategories/ListCategoriesController";
import { Router } from "express";
import multer from "multer";


const categoriesRoutes = Router();

const upload = multer({
    dest: "./tmp"
});

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoriesController = new ListCategoriesController();

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/", listCategoriesController.handle);

categoriesRoutes.post("/import", upload.single("file"), importCategoryController.handle);

export { categoriesRoutes }