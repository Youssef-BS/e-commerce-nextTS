import { Router } from "express";
import { createCategory } from "../controllers/category.controller";

const router: Router = Router () ;


router.post("/" , createCategory)

export default router ; 