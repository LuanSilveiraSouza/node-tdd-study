## NodeJS TDD Study

### Overview

The App in this repository is a REST API for study purposes. It has only basic functionalities with User, like creation and authentication.

### Technologies 

 - Language: Javascript with NodeJS
 - Express: Web Framework for making APIs
 - Docker and Postgres: Production Database
 - SQLite: Testing Database
 - Sequelize: ORM for managing databases
 - Jest, Supertest: Automated Tests
 - Faker: Generate fake info for tests
 - Json Web Token: Authentication
 - Bcryptjs: Password encryption
 
 ### Environment Setup

- Clone the Repo with `git clone https://github.com/LuanSilveiraSouza/js-designpatterns.git`

- Create a Postgres Container with `docker run --name postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres`

- In .env and .env.test insert the correct values for connecting in database and your JWT secret key

- Run `yarn install` or `npm install`

- See package.json for run the app in different environments