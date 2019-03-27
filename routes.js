// GLOBAL routes
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// USER routes
const USER = "/user";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/:id/edit-profile";
const CHANGE_PASSWORD = "/:id/change-password";

// TEXT routes
const TEXT = "/text";
const UPLOAD = "/upload";
const TEXT_DETAIL = "/:id";
const TEXT_EDIT = "/:id/edit";
const TEXT_DELETE = "/:id/delete";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  user: USER,
  userDetail: id => {
    if (id) {
      return `${USER}/${id}`;
    }
    return USER_DETAIL;
  },
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  text: TEXT,
  upload: UPLOAD,
  textDetail: TEXT_DETAIL,
  textEdit: TEXT_EDIT,
  textDelete: TEXT_DELETE
};

export default routes;
