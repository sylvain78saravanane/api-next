import { CreateUser } from "@/core/users/application/CreateUser";
import { FindByUser } from "@/core/users/application/FindUserById";
import { DeleteUser } from "@/core/users/application/DeleteUser";
import { UpdateUser } from "@/core/users/application/UpdateUser";
import { PrismaUserRepository } from "@/core/users/infrastructure/database/PrismaUserRepository";
import { NextResponse } from "next/server";

const repository = new PrismaUserRepository();

export async function POST (request : Request) {
    const { nom, prenom, email, age } = await request.json();
    const createUser = new CreateUser(repository);
    const user = await createUser.execute(nom, prenom, email, Number(age));
    return NextResponse.json(user, { status: 201 });
}

export async function GET(request : Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    const findByUser = new FindByUser(repository);
    const user = await findByUser.execute(id || "");
    if (!user) return NextResponse.json({ error: "Utilisateur non trouvé" }, { status: 404 });

    return NextResponse.json(user, { status: 200 });
    
}

export async function PUT (request : Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    const { nom, prenom, email, age } = await request.json();
    const updateUser = new UpdateUser(repository);
    await updateUser.execute(id || "", nom, prenom, email, Number(age));

    return NextResponse.json({ message: "Utilisateur mis à jour avec succès" }, { status: 200 });
}

export async function DELETE (request : Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    const deleteUser = new DeleteUser(repository);
    await deleteUser.execute(id || "");

    return NextResponse.json({ message: "Utilisateur supprimé avec succès" }, { status: 200 });
}