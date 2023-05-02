import { container } from "tsyringe";
import { ICategoriesRepository } from "../../modules/Cars/repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/Cars/repositories/implementations/CategoriesRepository";
import { ISpecificationsRepository } from "../../modules/Cars/repositories/ISpecificationsRepository";
import { SpecificationsRepository } from "../../modules/Cars/repositories/implementations/SpecifictionsRepository";
import { UsersRepository } from "../../modules/Accounts/repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../modules/Accounts/repositories/IUsersRepository";

container.registerSingleton<ICategoriesRepository>("CategoriesRepository", CategoriesRepository);

container.registerSingleton<ISpecificationsRepository>("SpecificationsRepository", SpecificationsRepository);

container.registerSingleton<IUsersRepository>("UsersRepository", UsersRepository);