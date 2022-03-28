# Work-It-Out

Work-It-Out is an app created from scratch as a final project for bootcamp students. Students are given the freedom to choose an idea for an app and to use a tech stack of their choosing. Work-It-Out uses ReactJS for the front-end, Express on the back-end and Postgres for database management.

## Set-Up

This app has two seperate folders, one for the front-end and the other for back-end and runs everything locally. Begin by setting up the back-end.

### Back-end

From within the `Server` folder:

1. Run `npm install` to install dependencies
2. From within a Postgres (PSQL) session, run `CREATE DATABASE workout;`
3. Switch to database by entering `\c workout` within PSQL
4. Seed the database by running `\i db/schema/01_users.sql` then `\i db/seeds/01_users.sql`
5. Exit PSQL session and from within the `Server` folder run `npm start` to start back-end server

From within the `Work-It-Out` folder:

1. Run `npm install` to install dependencies
2. Run `npm start` to start React and front-end

## Creating New Workouts

![Creating New Workout](https://github.com/woobrendan/Finals-Work-It-Out/blob/main/work-it-out/public/docs/new-workout.gif?raw=true)

## Exercise Details

![Exercise Information](https://github.com/woobrendan/Finals-Work-It-Out/blob/main/work-it-out/public/docs/exercise-details.png?raw=true)

## Dependencies

```sh
Front-End

- ReactJS
- Material UI
- React Bootstrap
- Axios
- React-Router-DOM
```

```sh
Back-End

- Postgres
- Express
- Dotenv
- JSON Web Token
- CORS
```
