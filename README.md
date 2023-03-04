# Application Development Starter

An opinionated application development boilerplate. Including:

- Backend starter using [ASP.NET Core](https://dotnet.microsoft.com/en-us/apps/aspnet)
- Frontend starter using [Next.js](https://github.com/vercel/next.js)
- Mobile starter using [Expo](https://github.com/expo/expo)
- Out of the box OpenID Connect authentication.
- API authorization example.

## Installation

```bash
# Backend
$ cd Backend
$ cd WebService
$ dotnet restore

# Frontend
$ cd Frontend
$ npm ci

# Mobile
$ cd Mobile
$ npm ci
```

## How to use

- Install all the dependencies.
- Run the SQL script in the ``Backend/Database/Migrations`` folder.
- If you want to change the database, Run ``./Generate-Entities`` to create new entities based on table on the DB.

## Running the app

```bash
# Backend
$ cd Backend
$ cd WebService
$ dotnet run

# Frontend
$ cd Frontend
$ npm run dev

# Mobile
$ cd Mobile
$ npm run start
```
