import { User } from "../domain/entities/User";
import { UserRepository } from "../domain/repositories/UserRepository";


export class UpdateUser {
    constructor(private repository: UserRepository) {}

    async execute(id:string, nom: string,prenom: string,email: string,age: number): Promise<User> {
        const user = await this.repository.findById(id);
        if (!user) {
            throw new Error(`Utilisateur avec l'ID ${id} non trouvé.`);
        }

        // Mettez à jour les informations utilisateur
        user.nom = nom;
        user.prenom = prenom;
        user.email = email;
        user.age = age;

        await this.repository.update(user);
        return user;
    }
}