import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";

@injectable()
class CreateUserUseCase {

    constructor(@inject("UsersRepository") private usersRepository: IUsersRepository) { };

    async execute({ name, email, password, driver_license }: ICreateUserDTO) {

        await this.usersRepository.create({ name, driver_license, email, password });
    }

}

export { CreateUserUseCase }