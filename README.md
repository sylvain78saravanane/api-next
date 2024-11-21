## API en Next.js (CRUD) - Gestion des utilisateurs avec une base de données MySQL

Cette API permet de gérer les utilisateurs à travers des opérations CRUD (Create, Read, Update, Delete) en utilisant **Next.js** et une base de données **MySQL**. 


### API Endpoints

| Méthode | Endpoint                 | Description                                                                 |
|---------|--------------------------|-----------------------------------------------------------------------------|
| **GET** | `/api/users/:id`         | Récupérer les détails d'un utilisateur spécifique en fonction de son `id`.  |
| **POST**| `/api/users`             | Créer un nouvel utilisateur avec les informations envoyées dans la requête. |
| **PUT** | `/api/users/:id`         | Mettre à jour les informations d'un utilisateur existant en fonction de son `id`. |
| **DELETE** | `/api/users/:id`      | Supprimer un utilisateur du système en fonction de son `id`.               |
