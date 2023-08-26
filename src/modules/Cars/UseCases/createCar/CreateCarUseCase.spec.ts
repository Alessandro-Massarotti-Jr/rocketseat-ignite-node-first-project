import { CarsRepositoryInMemory } from "@modules/Cars/repositories/in-memory/CarsRepositoryInMemory";
import { CreateCarUseCase } from "./CreateCarUseCase"

let createCarUseCase: CreateCarUseCase;
let carsRepositopryInMemory: CarsRepositoryInMemory;


describe("Create Car", () => {


    beforeEach(() => {
        carsRepositopryInMemory = new CarsRepositoryInMemory();
        createCarUseCase = new CreateCarUseCase(carsRepositopryInMemory);
    })

    it("Should be able to create a new car", async () => {
        await createCarUseCase.execute({
            brand: "brand",
            name: "car name",
            description: "car description",
            daily_rate: 100,
            license_plate: "ABC-1234",
            fine_amount: 60,
            category_id: "category"
        });
    })
})