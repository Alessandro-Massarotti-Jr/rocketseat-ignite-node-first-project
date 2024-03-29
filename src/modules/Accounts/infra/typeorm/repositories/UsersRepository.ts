import { Repository, getRepository } from "typeorm";
import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { User } from "../entities/User";

class UsersRepository implements IUsersRepository {

    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }
    async findById(id: string): Promise<User> {
        const user = await this.repository.findOne(id);

        return user;
    }
    async findByEmail(email: string): Promise<User> {
        const user = await this.repository.findOne({ email });
        return user;
    }

    async create({ name, password, email, driver_license, avatar, id }: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({
            id,
            name,
            password,
            email,
            driver_license,
            avatar
        });

        await this.repository.save(user);
    }

}

export { UsersRepository }