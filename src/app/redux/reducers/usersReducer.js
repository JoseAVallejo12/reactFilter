import { userTypes } from '../types/userTypes';
const INITIAL_STATE = {
  users: [],
  userFilter: []
};

const usersReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case userTypes.LIST_ALL_USERS:
      return {
        ...state,
        users: action.payload
      }
    case userTypes.FILTERED_USERS:
      return {
        ...state,
        userFilter: action.payload
      }
    default:
      return state;
  }

}


export default usersReducer;