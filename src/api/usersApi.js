import { getCall, postCall } from './clientApi';

export const signUp = async (email, password) => {
  try {
    return await postCall('/signup.php', { email, password });
  } catch (err) {
    console.log(err);
  }
};

export const getUser = async () => {
  try {
    return await getCall('/user.php');
  } catch (err) {
    console.log(err);
  }
};
