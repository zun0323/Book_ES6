import routes from "../routes";
import Texts from "../models/Text";

export const home = (req, res) => {
  res.render("home");
};
export const search = (req, res) => {
  res.render("search");
};

export const getUpload = (req, res) => {
  res.render("upload");
};

export const postUpload = async (req, res) => {
  const {
    body: { title, author, description }
  } = req;
  const newText = await Texts.create({
    title,
    author,
    description
  });
  res.render("upload");
};
export const textDetail = (req, res) => {
  res.render("textDetail");
};
export const textEdit = (req, res) => {
  res.render("textEdit");
};
export const textDelete = (req, res) => {
  res.send("textDelete");
};
