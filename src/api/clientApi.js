import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080/kanban',
  headers: {
    'Content-type': 'application/json',
    Authorization: localStorage.getItem('token'),
  },
  withCredentials: true,
});

const getCall = async (url) => {
  const response = await apiClient.get(url);
  return response.data;
};

const postCall = async (url, body) => {
  const response = await apiClient.post(url, body);
  return response.data;
};
const updateCall = async (url, body) => {
  const response = await apiClient.put(url, body);
  return response.data;
};

const deleteCall = async (url, body) => {
  const response = await apiClient.delete(url, body);
  return response.data;
};

export { getCall, postCall, updateCall, deleteCall };
