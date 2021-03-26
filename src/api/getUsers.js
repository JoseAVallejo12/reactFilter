import axios from 'axios';

const getUsers = async () => {
  return (await axios('https://jsonplaceholder.typicode.com/users')).data
}
export default getUsers;
