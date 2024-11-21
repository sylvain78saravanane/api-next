import { v4 as uuid } from "uuid";

export class User {
    constructor(
        public readonly id : string = uuid(),
        public nom : string,
        public prenom : string,
        public email : string,
        public age : number,
    ) {}
}