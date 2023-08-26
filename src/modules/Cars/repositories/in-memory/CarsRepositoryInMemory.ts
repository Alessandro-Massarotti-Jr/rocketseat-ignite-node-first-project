import { ICreateCarDTO } from "@modules/Cars/dtos/ICreateCarDTO";
import { ICarsRepository } from "../ICarsRepository";
import { Car } from "@modules/Cars/infra/typeorm/entities/Car";
import { Category } from "@modules/Cars/infra/typeorm/entities/Category";

class CarsRepositoryInMemory implements ICarsRepository {

    cars: Car[] = [];

    async create({ brand, category_id, daily_rate, description, fine_amount, license_plate, name }: ICreateCarDTO): Promise<void> {
        const car = new Car();
        Object.assign(car, {
            brand,
            category_id,
            daily_rate,
            description,
            fine_amount,
            license_plate,
            name
        });
        this.cars.push(car)
        return;
    }

}

export { CarsRepositoryInMemory }