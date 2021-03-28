import getUserApi from '../../api/getUsers';
import { userTypes} from '../types/userTypes';

const allUsersCard = (users) => {
  return {
    type: userTypes.LIST_ALL_USERS,
    payload: users
  }
}


const filteredUsers = (users, filter) => {
  return {
    type: userTypes.FILTERED_USERS,
    payload: users.filter((user) => user.author.includes(filter))
  }
}

const getUserAPI = () => async (dispatch) => {
  const data = await getUserApi()
  dispatch(allUsersCard(data))
};


export {
  getUserAPI,
  allUsersCard,
  filteredUsers,
};