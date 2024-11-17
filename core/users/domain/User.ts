export class User {
    constructor(
        public readonly id : number,
        public nom : string,
        public prenom : string,
        public email : string,
        public age : number,
    ) {}

    updateInfo(nom:string, prenom: string, email:string, age: number): void {
        this.nom=nom;
        this.email=email;
        this.age=age;
    }
}