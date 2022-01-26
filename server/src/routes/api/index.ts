import { Router } from "express";
const router = Router();

import employeeRouter from "./employee";
import employerRouter from "./employer";

router.use("/employee", employeeRouter);
router.use("/employer", employerRouter);

export default router;
