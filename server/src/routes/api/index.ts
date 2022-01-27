import { Router } from "express";
const router = Router();

import employeeRouter from "./employee";
import employerRouter from "./employer";
import contactRouter from "./contact";

router.use("/employee", employeeRouter);
router.use("/employer", employerRouter);
router.use("/contact", contactRouter);

export default router;
