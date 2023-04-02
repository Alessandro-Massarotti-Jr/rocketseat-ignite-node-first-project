import { container } from "tsyringe";
import { ICategoriesRepository } from "../../modules/Cars/repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/Cars/repositories/implementations/CategoriesRepository";
import { ISpecificationsRepository } from "../../modules/Cars/repositories/ISpecificationsRepository";
import { SpecificationsRepository } from "../../modules/Cars/repositories/implementations/SpecifictionsRepository";

container.registerSingleton<ICategoriesRepository>("CategoriesRepository", CategoriesRepository);

container.registerSingleton<ISpecificationsRepository>("SpecificationsRepository", SpecificationsRepository);