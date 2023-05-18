import { ADD_USER, DELETE_USER } from "../Type";

const INITIAL = {
  userList: [],
};

export default (state = INITIAL, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        userList: [...state.userList, action.data],
      };
    case DELETE_USER:
      return {
        ...state,
        userList: state.userList.filter((user) => user.id !== action.data.id),
      };
    default:
      return state;
  }
};
