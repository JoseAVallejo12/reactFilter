import axios from 'axios';

const getUsers = async () => {
  return (await axios('https://picsum.photos/v2/list')).data
}
export default getUsers;
