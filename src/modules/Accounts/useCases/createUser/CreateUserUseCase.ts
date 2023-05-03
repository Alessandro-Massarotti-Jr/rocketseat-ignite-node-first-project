import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { hash } from "bcrypt";

@injectable()
class CreateUserUseCase {

    constructor(@inject("UsersRepository") private usersRepository: IUsersRepository) { };

    async execute({ name, email, password, driver_license }: ICreateUserDTO) {

        const userAlreadyExists = this.usersRepository.findByEmail(email);

        if (userAlreadyExists) {
            throw new Error("User already exists")
        }

        const passwordHash = await hash(password, 8);

        await this.usersRepository.create({ name, driver_license, email, password: passwordHash });
    }

}

export { CreateUserUseCase }