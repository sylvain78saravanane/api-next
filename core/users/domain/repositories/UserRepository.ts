import { User } from "../entities/User";

export interface UserRepository {
    getAll() : Promise<User[]>;
    findById : (id:string) => Promise<User | null>;
    save : (user:User) => Promise<void>;
    update : (user:User) => Promise<void>;
    deleteById : (id:string) => Promise<void>
}
