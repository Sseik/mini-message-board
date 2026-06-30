import { Router } from "express";
import * as messagesController from "../controllers/messagesController.js";

const indexRouter = Router();

indexRouter.get("/", messagesController.getMessages);

export default indexRouter;
