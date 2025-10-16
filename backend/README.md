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

- Create `src/.env` file

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
</details>
