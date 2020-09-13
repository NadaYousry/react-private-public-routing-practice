const TOKEN_KEY = "this is token";

export const login = () => {
  localStorage.setItem(TOKEN_KEY, "login token");
};

export const isLogedin = () => {
  if (localStorage.getItem(TOKEN_KEY)) {
    return true;
  }

  return false;
};
