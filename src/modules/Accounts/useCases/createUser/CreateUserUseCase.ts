import { inject } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";

class CreateUserUseCase {

    constructor(@inject("UsersRepository") private usersRepository: IUsersRepository) { };

    async execute({ name, email, password, username, driver_license }: ICreateUserDTO) {

        await this.usersRepository.create({ name, driver_license, email, password, username });
    }

}

export { CreateUserUseCase }