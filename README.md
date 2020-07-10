# Converge Lite: Converge.io backend-exercise-0.2.3

(all credit to [this source](https://medium.com/@olavoandrparno/do-your-own-readme-jest-coverage-badges-f5b9189edb37)) for this coverage report:

| Statements                                                                                      | Branches                                                                              | Functions                                                                                      | Lines                                                                                      | Built By                                                                              |
| ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
| ![Statements](https://img.shields.io/badge/Coverage-93.25%25-brightgreen.svg 'Make me better!') | ![Branches](https://img.shields.io/badge/Coverage-73.02%25-red.svg 'Make me better!') | ![Functions](https://img.shields.io/badge/Coverage-90.63%25-brightgreen.svg 'Make me better!') | ![Lines](https://img.shields.io/badge/Coverage-94.41%25-brightgreen.svg 'Make me better!') | ![BuiltBy](https://img.shields.io/badge/TypeScript-Lovers-black.svg 'img.shields.io') |

## Top level caveats

- This was written on an Ubuntu 20.04 (PopOS 20.04 LTS) based machine
- Install/run scripts will work in bash shells running on Debian-like/MacOS machines
- They will likely not run on Windows (my apologies!)

## Stack

- JS as supported by node 12.16.3
- Testing with Jest + Supertest
- ORM with Sequelize
- Persistent store: Postgres 12 (running in Docker)

## Dependencies

- Node (tested with v12.16.3)
- Docker (tested with v19.03.12, build 48a66213fe)
- If you're on a Debian machine and Docker is not installed on your machine, a helper script (`./bin/install_docker.sh`) is included
  - All Docker commands in subsequent scripts assuming your user is added to a 'docker' group - i.e. you can run `docker` commands without a `sudo` prefix
  - If you're on MacOS and Docker has been installed via a .dmg, you should be okay

## Install

```
$ npm i
```

## Run

### Starting Postgres and seeding the database

Start Postgres in docker, run the sequelize migration and add custom relation constraints with:

```
$ npm run seed
```

### Start Postgres + Test (with Jest)

With the current implementation, some tests run against a up-and-running local database

```
$ npm run seed && npm run test
```

### Start Postgres + run server from port 8080

Without nodemon:

```
$ npm run start
```

With nodemon:

```
$ npm run watch
```

## Extra config

### Email alerts

For `Part three: threshold alerts`, email alerts are supported given a top level .env with the following smtp configuration is supplied:

- e.g. `./.env` might look like :

```
ALERTER_EMAIL_HOST="smtp.your.host.com"
ALERTER_EMAIL_PORT=587
ALERTER_EMAIL_USER="your@email.com"
ALERTER_EMAIL_PW="keep_it_safe"
```

- the `.env` variables are only picked up if `process.env.NODE_ENV === 'development'`
  - In all other cases, generic details from ethereal.email are used
