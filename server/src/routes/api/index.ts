import { Router } from "express";
const router = Router();

import employeeRouter from "./employee";

router.use("/employee", employeeRouter);

export default router;
