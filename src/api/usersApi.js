import { getCall } from './clientApi';

export const getUser = async () => {
  try {
    return await getCall('/user.php');
  } catch (err) {
    console.log(err);
  }
};
