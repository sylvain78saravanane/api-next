import { PrismaClient } from "@prisma/client";
import { User } from "../../domain/entities/User";
import { UserRepository } from "../../domain/repositories/UserRepository";

const prisma = new PrismaClient();

export class PrismaUserRepository implements UserRepository {
    async save(user: User): Promise<void> {
        await prisma.user.create({
            data: {
                id: user.id,
                nom: user.nom,
                prenom: user.prenom,
                email: user.email,
                age: user.age,
            },
        });
    }
    async findById(id: string): Promise<User | null> {
        const user = await prisma.user.findUnique({ where: { id } });
        if (!user) return null;
        return new User(user.id, user.nom, user.prenom, user.email, user.age);
    }

    async getAll(): Promise<User[]> {
        const users = await prisma.user.findMany();

    return users.map((user: { id: string, nom: string, prenom: string, email: string, age: number }) => {
        return new User(user.id, user.nom, user.prenom, user.email, user.age);
    });
    }

    async update(user: User): Promise<void> {
        await prisma.user.update({
            where: { id: user.id },
            data: {
                nom: user.nom,
                prenom: user.prenom,
                email: user.email,
                age: user.age,
            },
        });
    }

    async deleteById(id: string): Promise<void> {
        await prisma.user.delete({ where: { id } });
    }
}