export const home = (req, res) => {
  res.render("home");
};
export const search = (req, res) => {
  res.render("search");
};
export const upload = (req, res) => {
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
