export const apiUrl =
    process.env.NODE_ENV == "production"
    ? "http://localhost:4000"
    : "http://localhost:4000"

export const LOCAL_STORAGE_TOKEN_NAME = "token";