import { getCall, postCall } from './clientApi';

export const signIn = async (email, password) => {
  try {
    const response = await postCall('/signin.php', { email, password });
    console.log(response.user);
    localStorage.setItem('token', response.user.token);
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const signOut = async () => {
  try {
    const response = await getCall('/signOut.php');
    console.log(response);

    // if (response?.message.length > 0) {
    // localStorage.remotem('token');
    // }

    return response;
  } catch (err) {
    console.log(err);
  }
};
