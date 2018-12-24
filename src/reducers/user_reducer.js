export function userReducer(state = "", { type, payload }) {
  switch (type) {
    case "updateUser":
      return payload.user;
    default:
      break;
  }

  return state;
}
