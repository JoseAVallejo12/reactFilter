const INITIAL_STATE = {
  users: [],
};

const usersReducer = (state=INITIAL_STATE, action) => {
  if (action.type === 'get_users') {
    return {
      ...state,
      users: action.payload
    }
  } else {
    return state;
  }
};
export default usersReducer;