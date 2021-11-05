import express, { Request, Response, NextFunction } from "express";
import userRoutes from "./users";
const router = express.Router();

/* GET home page. */
router.get("/", function (req: Request, res: Response, next: NextFunction) {
  res.send("Hello World!");
});

router.use('/get-price', userRoutes);


export default router;
