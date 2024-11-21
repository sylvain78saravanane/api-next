import { v4 as uuid } from "uuid";
import { User } from "../domain/entities/User";
import { UserRepository } from "../domain/repositories/UserRepository";

export class CreateUser {
    constructor(private repository : UserRepository) {}

    async execute(nom:string, prenom:string, email:string, age:number): Promise<User> {
        const user = new User(uuid(), nom, prenom, email, age);
        await this.repository.save(user);
        return user;
    }
}