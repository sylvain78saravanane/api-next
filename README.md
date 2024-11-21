## API en Next.js (CRUD) - Gestion des utilisateurs avec une base de données MySQL

Cette API permet de gérer les utilisateurs à travers des opérations CRUD (Create, Read, Update, Delete) en utilisant **Next.js** et une base de données **MySQL**. 

### Structure du projet

- **Dossier `public`** : Ce dossier est dédié aux fichiers statiques, tels que les images, qui peuvent être utilisés dans l'application.
  
- **Prisma** : Outil de gestion de la base de données. Il permet de simplifier l'interaction avec MySQL via un ORM (Object-Relational Mapping), facilitant ainsi les opérations de lecture et d'écriture sur la base de données.
  
- **MySQL2** : Bibliothèque utilisée pour établir une connexion avec la base de données MySQL.
  
- **Docker** : La base de données MySQL est exécutée dans un conteneur Docker, facilitant ainsi l'installation et l'exécution de MySQL dans un environnement isolé.

### API Endpoints

| Méthode | Endpoint                 | Description                                                                 |
|---------|--------------------------|-----------------------------------------------------------------------------|
| **GET** | `/api/users/:id`         | Récupérer les détails d'un utilisateur spécifique en fonction de son `id`.  |
| **POST**| `/api/users`             | Créer un nouvel utilisateur avec les informations envoyées dans la requête. |
| **PUT** | `/api/users/:id`         | Mettre à jour les informations d'un utilisateur existant en fonction de son `id`. |
| **DELETE** | `/api/users/:id`      | Supprimer un utilisateur du système en fonction de son `id`.               |
