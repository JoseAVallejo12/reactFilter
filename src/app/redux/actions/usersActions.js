import getUserApi from '../../../api/getUsers';

const getUserAPI = () => async (dispatch) => {
  const data = await getUserApi()
  dispatch({
    type: 'get_users',
    payload: data
  })
};

export default getUserAPI;