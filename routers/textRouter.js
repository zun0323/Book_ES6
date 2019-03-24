import express from "express";
import routes from "../routes";
import {
  text,
  upload,
  textDetail,
  textEdit,
  textDelete
} from "../controllers/textControllers";

const textRouter = express.Router();

textRouter.get(routes.text, text);
textRouter.get(routes.upload, upload);
textRouter.get(routes.textDetail, textDetail);
textRouter.get(routes.textEdit, textEdit);
textRouter.get(routes.textDelete, textDelete);

export default textRouter;
