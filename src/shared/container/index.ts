import { UsersRepository } from "@modules/Accounts/infra/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "@modules/Accounts/repositories/IUsersRepository";
import { CategoriesRepository } from "@modules/Cars/infra/typeorm/repositories/CategoriesRepository";
import { SpecificationsRepository } from "@modules/Cars/infra/typeorm/repositories/SpecifictionsRepository";
import { ICategoriesRepository } from "@modules/Cars/repositories/ICategoriesRepository";
import { ISpecificationsRepository } from "@modules/Cars/repositories/ISpecificationsRepository";
import { container } from "tsyringe";


container.registerSingleton<ICategoriesRepository>("CategoriesRepository", CategoriesRepository);

container.registerSingleton<ISpecificationsRepository>("SpecificationsRepository", SpecificationsRepository);

container.registerSingleton<IUsersRepository>("UsersRepository", UsersRepository);