import { ICreateCarDTO } from "@modules/Cars/dtos/ICreateCarDTO";
import { ICarsRepository } from "@modules/Cars/repositories/ICarsRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateCarUseCase {

    constructor(@inject("CarsRepository") private carsRepository: ICarsRepository) { }

    async execute({ brand, category_id, daily_rate, description, fine_amount, license_plate, name }: ICreateCarDTO): Promise<void> {

        this.carsRepository.create({ brand, category_id, daily_rate, description, fine_amount, license_plate, name })

    }
}

export { CreateCarUseCase }