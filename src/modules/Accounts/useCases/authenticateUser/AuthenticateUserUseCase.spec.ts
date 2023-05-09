import { AppError } from "@shared/errors/AppError";

import "reflect-metadata";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";
import { ICreateUserDTO } from "@modules/Accounts/dtos/ICreateUserDTO";
import { UsersRepositoryInMemory } from "@modules/Accounts/repositories/in-memory/UsersRepositoryInMemory";


let authenticateUserUseCase: AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe("AuthenticateUser", () => {

    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        authenticateUserUseCase = new AuthenticateUserUseCase(usersRepositoryInMemory);
        createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
    });

    it("should be able to authenticate an user", async () => {

        const user: ICreateUserDTO = {
            driver_license: "00123",
            email: "user@test.com",
            password: "1234",
            name: "User Test"
        };

        await createUserUseCase.execute(user);

        const result = await authenticateUserUseCase.execute({
            email: user.email,
            password: user.password
        });

        expect(result).toHaveProperty("token");
    });

    it("Should not be able to authenticate an non existent user", async () => {

        expect(async () => {
            const result = await authenticateUserUseCase.execute({
                email: "false@email.com",
                password: "1234"
            });
        }).rejects.toBeInstanceOf(AppError);

    });

    it("Should not be able to authenticate with incorrect password", async () => {

        expect(async () => {

            const user: ICreateUserDTO = {
                driver_license: "00123",
                email: "user@user.com",
                password: "1234",
                name: "User Test Error"
            };

            await createUserUseCase.execute(user);

            await authenticateUserUseCase.execute({
                email: user.email,
                password: "incorrectPassword"
            });



        }).rejects.toBeInstanceOf(AppError);

    });


});