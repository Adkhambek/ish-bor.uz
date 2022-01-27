import { Router } from "express";
const router = Router();

import employeeRouter from "./employee";
import employerRouter from "./employer";
import contactRouter from "./contact";
import loginRouter from "./login";

router.use("/employee", employeeRouter);
router.use("/employer", employerRouter);
router.use("/contact", contactRouter);
router.use("/login", loginRouter);

export default router;
