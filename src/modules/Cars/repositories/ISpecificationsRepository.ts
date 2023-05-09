import { Specification } from "../infra/typeorm/entities/Specification";
import { ICreateCategoryDTO } from "./ICategoriesRepository";

interface ICrateSpecificationDTO {
    name: string;
    description: string;
}


interface ISpecificationsRepository {
    create({ name, description }: ICreateCategoryDTO): Promise<void>;
    findByName(name: string): Promise<Specification>;
}

export { ISpecificationsRepository, ICrateSpecificationDTO }