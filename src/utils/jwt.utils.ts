import jwt from "jsonwebtoken";
import { AppError } from "../errors/AppError";
import { AuthenticatedUser } from "../types/auth.types";

type JwtPayload = AuthenticatedUser;

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

function isAuthenticatedUserPayload(
    payload: unknown
    ): payload is AuthenticatedUser {
    if (!payload || typeof payload !== "object") {
        return false;
    }

    const candidate = payload as Partial<AuthenticatedUser>;

    return (
        typeof candidate.userId === "number" &&
        typeof candidate.email === "string" &&
        (candidate.role === "USER" || candidate.role === "ADMIN")
    );
}

export function verifyToken(token: string): AuthenticatedUser {
    try {
        const decoded = jwt.verify(token, getJwtSecret());

        if (!isAuthenticatedUserPayload(decoded)) {
        throw new AppError("Token inválido", 401);
        }

        return decoded;
    } catch (error) {
        if (error instanceof AppError) {
        throw error;
        }

        throw new AppError("Token inválido o caducado", 401);
    }
}