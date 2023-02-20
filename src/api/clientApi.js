import axios from 'axios';

const getConfig = (method) => ({
  method,
  baseURL: 'http://localhost:8080/kanban',
  headers: {
    Authorization: localStorage.getItem('token'),
    'Content-type': 'application/json',
  },
});

const getCall = async (url) => {
  const response = await axios({
    url,
    ...getConfig('get'),
  });
  return response.data;
};

const postCall = async (url, body) => {
  const response = await axios({
    url,
    data: body,
    ...getConfig('post'),
  });
  return response.data;
};

export { getCall, postCall };
