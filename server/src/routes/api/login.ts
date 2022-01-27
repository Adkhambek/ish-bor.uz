import { Router, Request, Response } from "express";
import { getRepository } from "typeorm";
const router = Router();
import { Login } from "../../entity/Login";
import jwt from "jsonwebtoken";
import key from "../../config/keys";

router.post("/", async (req: Request, res: Response) => {
    const loginRepository = getRepository(Login);
    const admin = await loginRepository.findOne({
        username: req.body.username,
        password: req.body.password,
    });

    if (!admin) {
        return res.status(400).json({
            code: 400,
            status: "Fail",
            error: "Username or Password is incorrenct",
        });
    }
    const token: string = jwt.sign(
        { username: admin.username },
        key.secretKey as string,
        {
            expiresIn: key.expiresIn,
        }
    );
    return res.status(200).json({
        code: 200,
        status: "Success",
        token: "Bearer " + token,
    });
});

export default router;
