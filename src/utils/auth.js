const { localStorage } = global.window;

const auth = {
  login(data) {
    const { user, isSuccess } = data;
    const { userName, _id } = user;

    localStorage.userName = userName;
    localStorage.userId = _id;
    localStorage.isSuccess = isSuccess;
    localStorage.role = user.role;
  },

  userId() {
    return localStorage.userId;
  },

  username() {
    return localStorage.userName;
  },

  role() {
    return localStorage.role;
  },

  logout() {
    localStorage.clear();
  },
};

export default auth;
