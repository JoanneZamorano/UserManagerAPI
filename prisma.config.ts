import dotenv from "dotenv";
import path from "path";
import { defineConfig } from "@prisma/config";

// Carga explícitamente el archivo .env de la raíz del proyecto
dotenv.config({ path: path.resolve(__dirname, ".env") });

export default defineConfig({
    schema: "prisma/schema.prisma",
    migrations: {
        path: "prisma/migrations",
    },
    datasource: {
        url: process.env.DATABASE_URL,
    },
});