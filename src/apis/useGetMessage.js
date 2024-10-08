import { useQuery } from '@tanstack/react-query';
import { useSnackbar } from 'notistack';
import { request } from './request'; // Adjust path if necessary

const useMessages = (chatId, page, pageSize = 15) => {
  const { enqueueSnackbar } = useSnackbar();

  const fetchMessages = async () => {
    try {
      const response = await request({
        url: '/messages',
        method: 'GET',
        params: { chat_id: chatId, page, page_size: pageSize },
      });
      return response.data.messages;
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Error fetching messages';
      enqueueSnackbar(errorMessage, { variant: 'error' });
      throw error;
    }
  };

  return useQuery(['messages', chatId, page], fetchMessages, {
    keepPreviousData: true,
  });
};

export default useMessages;
