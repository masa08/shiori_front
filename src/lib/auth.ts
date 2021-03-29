import firebase from 'firebase';
import axios from 'axios';

const register = async (name: string, email: string, password: string) => {
  const url = process.env.VUE_APP_HOST + '/api/users';
  const params = new FormData();
  params.append('name', name);
  params.append('email', email);
  params.append('password', password);

  try {
    const result = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    if (result.user == null) {
      return;
    }
    const token = await result.user.getIdToken();

    const res = await axios.post(url, params);
    const user = res.data.user;

    return { token: token, user: user };
  } catch (e) {
    alert(e);
  }
};

const login = async (email: string, password: string) => {
  const url = process.env.VUE_APP_HOST + '/api/login';
  const params = new FormData();
  params.append('email', email);
  params.append('password', password);

  try {
    const result = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    if (result.user == null) {
      return;
    }
    const token = await result.user.getIdToken();

    const res = await axios.post(url, params);
    const user = res.data.user;

    return { token: token, user: user };
  } catch (e) {
    alert(e);
  }
};

const logout = async () => {
  try {
    await firebase.auth().signOut();
  } catch (e) {
    alert(e);
  }
};

export { register, login, logout };
