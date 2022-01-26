import { getConnection, getRepository } from "typeorm";
import { Router, Request, Response } from "express";
const router = Router();
import { Employer } from "../../entity/Employer";
import key from "../../config/keys";

router.get("/page/:num", async (req: Request, res: Response) => {
    const employerRepository = getRepository(Employer);
    const page: number = (req.params.num as any) * 1;
    const total: number = await employerRepository.count();
    const Totalpage: number = Math.ceil(total / key.pgLimit);
    if (page === 0 || page > Totalpage) {
        return res.status(404).json({
            code: 404,
            status: "Not Found",
            error: "Bunday sahifa yo'q",
        });
    } else {
        const offset = (page - 1) * key.pgLimit;
        const data = await employerRepository.find({
            select: [
                "id",
                "profession",
                "region",
                "age",
                "salary",
                "created_at",
            ],
            where: {
                status: 1,
            },
            order: {
                id: "DESC",
            },
            skip: offset,
            take: key.pgLimit,
        });
        if (!data.length) {
            return res.status(400).json({
                code: 400,
                status: "Empty",
                error: "Hech qanday ma'lumot yo'q",
            });
        }
        res.status(200).json({
            code: 200,
            status: "OK",
            data,
        });
    }
});

router.get("/:id", async (req: Request, res: Response) => {
    const employerRepository = getRepository(Employer);
    const id: number = (req.params.id as any) * 1;
    const data = await employerRepository.findOne(id, {
        where: {
            status: 1,
        },
    });
    if (!data) {
        return res.status(400).json({
            code: 400,
            status: "Empty",
            error: "Hech qanday ma'lumot yo'q",
        });
    }

    res.status(200).json({
        code: 200,
        status: "OK",
        employer: data,
    });
});

router.get("/region/:name/page/:num", async (req: Request, res: Response) => {
    const { name, num } = req.params as any;

    const employerRepository = getRepository(Employer);
    const total: number = await employerRepository.count({
        where: { region: name },
    });
    const Totalpage: number = Math.ceil(total / key.pgLimit);
    if (+num === 0 || +num > Totalpage) {
        return res.status(404).json({
            code: 404,
            status: "Not Found",
            error: "Bunday sahifa yo'q",
        });
    } else {
        const offset = (num - 1) * key.pgLimit;
        const data = await employerRepository.find({
            select: [
                "id",
                "profession",
                "region",
                "age",
                "salary",
                "created_at",
            ],
            where: {
                status: 1,
                region: name,
            },
            order: {
                id: "DESC",
            },
            skip: offset,
            take: key.pgLimit,
        });
        if (!data.length) {
            return res.status(400).json({
                code: 400,
                status: "Empty",
                error: "Hech qanday ma'lumot yo'q",
            });
        }
        res.status(200).json({
            code: 200,
            status: "OK",
            data,
        });
    }
});

router.get("/new/:id", async (req: Request, res: Response) => {
    const employerRepository = getRepository(Employer);
    const id: number = (req.params.id as any) * 1;
    const data = await employerRepository.findOne(id, {
        where: {
            status: 0,
        },
        order: {
            id: "DESC",
        },
    });
    if (!data) {
        return res.status(400).json({
            code: 400,
            status: "Empty",
            error: "Hech qanday ma'lumot yo'q",
        });
    }

    res.status(200).json({
        code: 200,
        status: "OK",
        employer: data,
    });
});

router.get("/new/page/:num", async (req: Request, res: Response) => {
    const employerRepository = getRepository(Employer);
    const page: number = (req.params.num as any) * 1;
    const total: number = await employerRepository.count();
    const Totalpage: number = Math.ceil(total / key.pgLimit);
    if (page === 0 || page > Totalpage) {
        return res.status(404).json({
            code: 404,
            status: "Not Found",
            error: "Bunday sahifa yo'q",
        });
    } else {
        const offset = (page - 1) * key.pgLimit;
        const data = await employerRepository.find({
            select: [
                "id",
                "profession",
                "region",
                "age",
                "created_at",
                "status",
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
        if (!data.length) {
            return res.status(400).json({
                code: 400,
                status: "Empty",
                error: "Hech qanday ma'lumot yo'q",
            });
        }
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
            .into(Employer)
            .values(req.body)
            .execute();
        res.status(201).json({
            code: 201,
            status: "success",
            message: "Sizning so'rovingiz qabul qilindi.",
        });
    } catch (error) {
        console.log(error);
    }
});

router.patch("/:id", async (req: Request, res: Response) => {
    try {
        const id: number = (req.params.id as any) * 1;
        await getConnection()
            .createQueryBuilder()
            .update(Employer)
            .set(req.body)
            .where("id = :id", { id })
            .execute();
        res.status(200).json({
            code: 200,
            status: "success",
            message: "Ma'lumotlar to'gri holatga keltirildi",
        });
    } catch (error) {
        console.log(error);
    }
});

router.delete("/:id", async (req: Request, res: Response) => {
    try {
        const id: number = (req.params.id as any) * 1;
        await getConnection()
            .createQueryBuilder()
            .delete()
            .from(Employer)
            .where("id = :id", { id })
            .execute();
        res.status(200).json({
            code: 200,
            status: "success",
            message: "Ma'lumot o'chirildi",
        });
    } catch (error) {
        console.log(error);
    }
});

export default router;
