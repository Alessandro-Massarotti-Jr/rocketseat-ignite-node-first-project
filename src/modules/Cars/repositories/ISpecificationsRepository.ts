import { Specification } from "../model/Specification";
import { ICreateCategoryDTO } from "./ICategoriesRepository";

interface ICrateSpecificationDTO {
    name: string;
    description: string;
}


interface ISpecificationsRepository {
    create({ name, description }: ICreateCategoryDTO): void;
    findByName(name: string): Specification;
}

export { ISpecificationsRepository, ICrateSpecificationDTO }