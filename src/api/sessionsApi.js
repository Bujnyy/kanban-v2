import { getCall, postCall } from './clientApi';

export const signIn = async (email, password) => {
  try {
    const response = await postCall('/signin.php', { email, password });
    localStorage.setItem('token', response.user.token);
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const signOut = async () => {
  try {
    return await getCall('/signOut.php');
  } catch (err) {
    console.log(err);
  }
};
