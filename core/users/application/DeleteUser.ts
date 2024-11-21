import { UserRepository } from "../domain/repositories/UserRepository";

export class DeleteUser {
    constructor(private repository: UserRepository) {}

    async execute(id: string): Promise<void> {
        const user = await this.repository.findById(id);
        if (!user) {
            throw new Error(`Utilisateur avec l'ID ${id} non trouvé.`);
        }

        await this.repository.deleteById(id);
    }
}