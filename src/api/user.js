import axios from 'axios';

const getUserById = async (userId) => {
  const url = process.env.VUE_APP_HOST + `/api/users/${userId}`;
  try {
    const userRes = await axios.get(url);
    const user = userRes.data.user;

    return user;
  } catch (e) {
    alert(e);
  }
};

export { getUserById };
