import { getConnection, getRepository } from "typeorm";
import { Router, Request, Response } from "express";
const router = Router();
import { Employee } from "../../entity/Employee";
import key from "../../config/keys";
import axios from "axios";
import protect from "../../middleware/auth";

router.get("/page/:num", async (req: Request, res: Response) => {
    const employeeRepository = getRepository(Employee);
    const page: number = (req.params.num as any) * 1;
    const total: number = await employeeRepository.count({
        where: {
            status: 1,
        },
    });
    const Totalpage: number = Math.ceil(total / key.pgLimit);

    if (page === 0 || page > Totalpage) {
        return res.status(404).json({
            code: 404,
            status: "Not Found",
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

router.get("/pages", async (req: Request, res: Response) => {
    const employeeRepository = getRepository(Employee);
    const total: number = await employeeRepository.count({
        where: {
            status: 1,
        },
    });
    const Totalpage: number = Math.ceil(total / key.pgLimit);
    res.status(200).json({
        code: 200,
        status: "success",
        pages: Totalpage,
    });
});

router.get("/:id", async (req: Request, res: Response) => {
    const employeeRepository = getRepository(Employee);
    const id: number = (req.params.id as any) * 1;
    const data = await employeeRepository.findOne(id, {
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
        employee: data,
    });
});

router.get("/region/:name", async (req: Request, res: Response) => {
    const { name } = req.params as any;

    const employeeRepository = getRepository(Employee);
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
            status: 1,
            region: name,
        },
        order: {
            id: "DESC",
        },
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
});

router.get("/new/pages", protect, async (req: Request, res: Response) => {
    const employeeRepository = getRepository(Employee);
    const total: number = await employeeRepository.count({
        where: {
            status: 0,
        },
    });
    const Totalpage: number = Math.ceil(total / key.pgLimit);
    res.status(200).json({
        code: 200,
        status: "success",
        pages: Totalpage,
    });
});

router.get("/new/:id", protect, async (req: Request, res: Response) => {
    const employeeRepository = getRepository(Employee);
    const id: number = (req.params.id as any) * 1;
    const data = await employeeRepository.findOne(id, {
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
        employee: data,
    });
});

router.get("/new/page/:num", protect, async (req: Request, res: Response) => {
    const employeeRepository = getRepository(Employee);
    const page: number = (req.params.num as any) * 1;
    const total: number = await employeeRepository.count({
        where: {
            status: 0,
        },
    });
    const Totalpage: number = Math.ceil(total / key.pgLimit);
    if (page === 0 || page > Totalpage) {
        return res.status(404).json({
            code: 404,
            status: "Not Found",
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
            .into(Employee)
            .values(req.body)
            .execute();
        res.status(201).json({
            code: 201,
            status: "success",
            message: "Sizning so'rovingiz qabul qilindi.",
        });
    } catch (error) {
        res.status(400).json({
            code: 400,
            status: "fail",
            message: "Something wrong.",
        });
    }
});

router.get(
    "/send/to/telegram/:id",
    protect,
    async (req: Request, res: Response) => {
        try {
            const id: number = (req.params.id as any) * 1;
            const employeeRepository = getRepository(Employee);
            const data = await employeeRepository.findOne(id, {
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
            console.log(data);
            const message = `<b>Ish joy:</b> ${data.profession}\n📍  ${data.region}\n💵 ${data.salary}\n📞  ${key.baseUrl}/id/${id}`;
            const request = await axios.get(
                `https://api.telegram.org/bot${
                    key.botToken
                }/sendMessage?chat_id=${key.telegramChannel}&text=${encodeURI(
                    message
                )}&parse_mode=HTML`
            );
            if (request.status === 200) {
                return res.status(200).json({
                    code: 200,
                    status: "Success",
                    error: "E'lon telegram kanalga yuborildi",
                });
            } else {
                return res.status(400).json({
                    code: 400,
                    status: "Fail",
                    error: "Qandaydir xatolik bor xabarni telegram kanalga yuborishda",
                });
            }
        } catch (error) {
            console.log(error);
        }
    }
);

router.patch("/:id", protect, async (req: Request, res: Response) => {
    try {
        const id: number = (req.params.id as any) * 1;
        await getConnection()
            .createQueryBuilder()
            .update(Employee)
            .set(req.body)
            .where("id = :id", { id })
            .execute();
        res.status(200).json({
            code: 200,
            status: "success",
            message: "Ma'lumotlar to'gri holatga keltirildi",
        });
    } catch (error) {
        res.status(400).json({
            code: 400,
            status: "fail",
            message: "Something wrong.",
        });
    }
});

router.patch("/status/:id", protect, async (req: Request, res: Response) => {
    try {
        const id: number = (req.params.id as any) * 1;
        await getConnection()
            .createQueryBuilder()
            .update(Employee)
            .set({ status: req.body.status })
            .where("id = :id", { id })
            .execute();
        res.status(200).json({
            code: 200,
            status: "success",
            message: "Ma'lumot tasdiqlandi",
        });
    } catch (error) {
        res.status(400).json({
            code: 400,
            status: "fail",
            message: "Something wrong.",
        });
    }
});

router.delete("/:id", protect, async (req: Request, res: Response) => {
    try {
        const id: number = (req.params.id as any) * 1;
        await getConnection()
            .createQueryBuilder()
            .delete()
            .from(Employee)
            .where("id = :id", { id })
            .execute();
        res.status(200).json({
            code: 200,
            status: "success",
            message: "Ma'lumot o'chirildi",
        });
    } catch (error) {
        res.status(400).json({
            code: 400,
            status: "fail",
            message: "Something wrong.",
        });
    }
});

export default router;
