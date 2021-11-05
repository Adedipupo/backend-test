import express, { Request, Response, NextFunction } from "express";
import { getData } from "../controllers";
const router = express.Router();

/* GET users listing. */
router.post("/", getData);

export default router;
