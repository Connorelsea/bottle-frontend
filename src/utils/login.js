
export function hasUser() {
  if (localStorage.getItem("id_token")) {
    return true;
  } else {
    return false;
  }
}
