import { getConnection, getRepository } from "typeorm";
import { Router, Request, Response } from "express";
const router = Router();
import { Employee } from "../../entity/Employee";
import key from "../../config/keys";

router.get("/page/:num", async (req: Request, res: Response) => {
    const employeeRepository = getRepository(Employee);
    const page: number = (req.params.num as any) * 1;
    const total: number = await employeeRepository.count();
    const Totalpage: number = Math.ceil(total / key.pgLimit);
    if (page === 0 || page > Totalpage) {
        res.status(404).json({
            statusCode: 404,
            error: "Bunday sahifa yo'q",
        });
    } else {
        const offset = (page - 1) * key.pgLimit;
        const data = await employeeRepository.find({
            select: [
                "id",
                "profession",
                "region",
                "detail",
                "salary",
                "created_at",
            ],
            where: {
                status: 0,
            },
            order: {
                id: "DESC",
            },
            skip: offset,
            take: key.pgLimit,
        });
        res.status(200).json({
            code: 200,
            status: "OK",
            data,
        });
    }
});

router.post("/", async (req: Request, res: Response) => {
    try {
        await getConnection()
            .createQueryBuilder()
            .insert()
            .into(Employee)
            .values(req.body)
            .execute();
        res.status(201).json({
            statusCode: 201,
            message: "Sizning so'rovingiz qabul qilindi.",
        });
    } catch (error) {
        console.log(error);
    }
});

export default router;
