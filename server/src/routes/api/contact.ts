import { Router, Request, Response } from "express";
const router = Router();
import key from "../../config/keys";
import axios from "axios";

router.post("/", async (req: Request, res: Response) => {
    try {
        const message = `<b>Ismi:</b> ${req.body.name}\n<b>Email:</b> ${req.body.email}\n<b>Tel:</b> ${req.body.tel}\n<b>Xabar:</b> ${req.body.message}`;
        const request = await axios.get(
            `https://api.telegram.org/bot${key.botToken}/sendMessage?chat_id=${
                key.chatId
            }&text=${encodeURI(message)}&parse_mode=HTML`
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
});

export default router;
