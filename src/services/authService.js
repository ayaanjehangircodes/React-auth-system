const USERS_KEY = "authUsers";

export const getUsersFromLocalStorage = () => {
  const users = localStorage.getItem(USERS_KEY);
  return users ? JSON.parse(users) : [];
};

export const saveUsersToLocalStorage = (users) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

export const loginUser = (email, password) => {
  const users = getUsersFromLocalStorage();
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    localStorage.setItem("authUser", JSON.stringify(user));
    return user;
  }
  return null;
};

export const registerUser = (email, password) => {
  const users = getUsersFromLocalStorage();
  const exists = users.some(u => u.email === email);
  if (exists) return null;

  const newUser = { email, password };
  users.push(newUser);
  saveUsersToLocalStorage(users);
  localStorage.setItem("authUser", JSON.stringify(newUser));
  return newUser;
};

export const getUserFromLocalStorage = () => {
  const user = localStorage.getItem("authUser");
  return user ? JSON.parse(user) : null;
};
