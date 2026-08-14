import jwt from "jsonwebtoken";
import { AppError } from "../errors/AppError";

type JwtPayload = {
    userId: number;
    email: string;
    role: string;
};

function getJwtSecret() {
    const secret = process.env.JWT_SECRET;

    if (!secret) {
        throw new AppError("JWT_SECRET no está configurado", 500);
    }

    return secret;
}

function getJwtExpiresIn() {
    return process.env.JWT_EXPIRES_IN || "1h";
}

export function generateToken(payload: JwtPayload) {
    return jwt.sign(payload, getJwtSecret(), {
        expiresIn: getJwtExpiresIn() as any,
    });
}