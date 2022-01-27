import { getRepository } from "typeorm";
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import key from "../config/keys";
import { Login } from "../entity/Login";

export default async (req: Request, res: Response, next: NextFunction) => {
    let token: string | undefined;
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        token = req.headers.authorization.split(" ")[1];
    }
    if (!token) {
        return res.status(400).json({
            statusCode: 400,
            error: "You are not logged in",
        });
    } else {
        try {
            const { username } = jwt.verify(token, key.secretKey as string) as {
                username: string;
            };
            const loginRepository = getRepository(Login);
            const admin = await loginRepository.findOne({
                username,
            });
            if (!admin) {
                return res.status(401).json({
                    statusCode: 401,
                    error: "Username is not existed",
                });
            } else {
                return next();
            }
        } catch (error) {
            if (error.name === "JsonWebTokenError") {
                return res.status(400).json({
                    statusCode: 400,
                    error: "Invalid Token",
                });
            } else if (error.name === "TokenExpiredError") {
                return res.status(400).json({
                    statusCode: 400,
                    error: "Token is expired. Please, login again",
                });
            }
        }
    }
};
