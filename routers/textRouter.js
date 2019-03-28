import express from "express";
import routes from "../routes";
import {
  textDetail,
  textEdit,
  textDelete,
  getUpload,
  postUpload
} from "../controllers/textControllers";

const textRouter = express.Router();

textRouter.get(routes.upload, getUpload);
textRouter.post(routes.upload, postUpload);
textRouter.get(routes.textDetail, textDetail);
textRouter.get(routes.textEdit, textEdit);
textRouter.get(routes.textDelete, textDelete);

export default textRouter;
