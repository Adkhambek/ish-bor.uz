import { Router } from "express";
const router = Router();
import routes from "./api";
import key from "../config/keys";

const api = `/${key.apiBaseUrl}`;
router.use(api, routes);
router.use(api, (req, res) =>
    res.status(404).json({
        status: 404,
        error: "Not found",
    })
);

export default router;
