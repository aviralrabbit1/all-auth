import { getEnv } from "../common/utils/get-env";

const appConfig = () => ({
  NODE_ENV: getEnv("NODE_ENV", "development"),
  PORT: getEnv("PORT", "5000"),
  APP_ORIGIN: getEnv("APP_ORIGIN", "localhost"),
  BASE_PATH: getEnv("BASE_PATH", "/api/V1"),
  JWT: {
    SECRET: getEnv("JWT_SECRET"),
    EXPIRES_IN: getEnv("JWT_EXPIRES_IN", "1d"),
    REFRESH_SECRET: getEnv("JWT_REFRESH_SECRET"),
    REFRESG_EXPIRES_IN: getEnv("JWT_REFRESH_EXPIRES_IN", "7d"),
  } 
});

export const config = appConfig();
