# Node backend

## 1. Initial Setup

<details>
<summary>
1.1 Initialisation
</summary>
- install devDependencies, and setup `scripts` in `package.json`

```sh
bun init -y
```

```sh
bun add typescript @types/node nodemon --save-dev
```
</details>

<details>
<summary>
1.2 .env file setup
</summary>

- Create `src/.env` file and install dependency

```sh
PORT=8000
NODE_ENV=development
APP_ORIGIN=http://localhost:3000
JWT_SECRET=jwt_secret_key
JWT_EXPIRES_IN=1d
JWT_REFRESH_SECRET=jwt_refresh_secret_key
JWT_REFRESH_EXPIRES_IN=7d
REFRESH_TOKEN_EXPIRES_IN=7d
RESET_PASSWORD_TOKEN_EXPIRES_IN=1h
```

```sh
bun add dotenv
```

- In `index.ts`,

```ts
import dotenv from 'dotenv';
dotenv.config();
```

- or we can create a separate file `src/common/utils` to create utility function 
```ts
export const getEnv = (key: string, defaultValue: string = ""): string => {
  const value = process.env[key];
  if (value === undefined) {
    if(defaultValue){
      return defaultValue;
    }
    throw new Error(`Environment variable ${key} is not set`);
  }
  return value;
}
```

- to use in `src/config/app.config.ts` for storing logic for extracting `.env` secrets. 

```ts
import { getEnv } from "../common/utils/get-env";

const appConfig = () => ({
  NODE_ENV: getEnv("NODE_ENV", "development"),
  PORT: getEnv("PORT", "5000"),
  ...
});

export const config = appConfig();

```

</details>

<details>
<summary>
1.3 Install express
</summary>

```sh
bun add express --save-dev @types/express
```

</details>

<details>
<summary>
1.4 Cors and cookie
</summary>

```sh
bun add cors cookie-parser --save-dev @types/cors cookie-parser
```

</details>

## 2. Database

<details>
<summary>
2.1 MongoDB
</summary>

- Visit [MongoDb](https://www.mongodb.com/) and Create a new cluster, `cluster-name` and database.
- Connect with the cluster using preferred method. 
- I connected directly with `vs code` using the `connection string`.
- Add an environment variable `MONGO_URI` in `.env` file with the value=`MongoDB connection string` with the format
  ```.env
  MONGODB_URI="mongodb+srv://<username>:<password>@<cluster-name>.or3twdq.mongodb.net/"
  ```
- Update `src/config/app.config.ts`
  ```ts
  const appConfig = () => ({
    ...
    MONGODB_URI: getEnv("MONGODB_URI"),
    ...
  });
  ```

</details>

<details>
<summary>
2.2 Mongoose
</summary>

- Install it with
```sh
bun add mongoose
```

- create `src/database/models/database.ts`
```ts
import mongoose from "mongoose";
const connectDatabase = async () => {
  try {
    await mongoose.connect(config.MONGODB_URI);
    console.log("MongoDB connected successfully");    
  } catch (error) {
    console.log("Erro connecting to database");
    process.exit(1);
  }
}
```

- In `src/index.ts`
```ts
app.listen(config.PORT, async () => {
  await connectDatabase();
})
```

</details>

## 3. Error Handling

<details>
<summary>
3.1 Middleware
</summary>

- For error handling, create `src/middlewares/errorHandler.ts`
```ts
import { ErrorRequestHandler } from "express";
export const ErrorHandler:ErrorRequestHandler = (error, req, res, next): any => {
  console.error(`Error occurred: ${error.message} on path ${req.path}`);
  return res.status(500).json({
    message: "Internal Server Error",
    error: error?.message || "Something went wrong",
  });
}
```

- and use it in `src/index.ts`
```ts
app.use(ErrorHandler);
```

</details>