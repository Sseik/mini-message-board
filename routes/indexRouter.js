import { Router } from "express";
import * as messagesController from "../controllers/messagesController.js";

const indexRouter = Router();

indexRouter.get("/", messagesController.getMessages);
indexRouter.get("/new", messagesController.getMessageForm);
indexRouter.post("/new", messagesController.postMessage);

export default indexRouter;
