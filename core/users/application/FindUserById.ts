import { User } from "../domain/entities/User";
import { UserRepository } from "../domain/repositories/UserRepository";

export class FindByUser {
    constructor(private repository: UserRepository) {}

    async execute(id: string): Promise<User | null> {
        return await this.repository.findById(id);
    }
}