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
bun add typescript @types/node ts-node nodemon --save-dev
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