import { Router } from "express";
const router = Router();
const routes = require("./api");
const { apiUrl } = require("../config/keys");

const api = `/${apiUrl}`;
router.use(api, routes);
router.use(api, (req, res) =>
    res.status(404).json({
        status: 404,
        error: "Not found",
    })
);

export default router;
