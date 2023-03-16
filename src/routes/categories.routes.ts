import { Router } from "express";
import multer from "multer";
import { createCategoryController } from "../modules/Cars/UseCases/createCategory";
import { listCategoriesController } from "../modules/Cars/UseCases/listCategories";

const categoriesRoutes = Router();

const upload = multer({
    dest: "./tmp"
});

categoriesRoutes.post("/", (req, res) => {
    return createCategoryController.handle(req, res);
});

categoriesRoutes.get("/", (req, res) => {
    return listCategoriesController.handle(req, res);
})

categoriesRoutes.post("/import", upload.single("file"), (req, res) => {
    const { file } = req;
    console.log(file);
    return res.send();
})

export { categoriesRoutes }