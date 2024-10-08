import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`, // Assuming token-based authentication
  },
});

export const fetchChats = (isPrivate = 1 ) => {
  return apiClient.get('/web-messages', { params: { is_private: isPrivate } });
};

export const postMessage = (chatId, message ) => {
  return apiClient.post('/send-message', { chat_id: chatId, message });
};

