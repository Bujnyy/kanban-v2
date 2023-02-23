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
    const response = await getCall('/signOut.php');

    if (response?.message.length > 0) {
      localStorage.removeItem('token');
    }

    return response;
  } catch (err) {
    console.log(err);
  }
};

export const signUp = async (email, password) => {
  try {
    return await postCall('/signup.php', { email, password });
  } catch (err) {
    console.log(err);
  }
};
