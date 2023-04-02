import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";
import { container } from "tsyringe";

class ListCategoriesController {


    handle(req: Request, res: Response): Response {

        const listCategoriesUseCase = container.resolve(ListCategoriesUseCase);

        const all = listCategoriesUseCase.execute();
        return res.status(200).json(all);
    }
}

export { ListCategoriesController }