import { useMutation } from '@tanstack/react-query';
import { useSnackbar } from 'notistack';
import { request } from './request'; // Adjust path if necessary

const useSendMessage = () => {
  const { enqueueSnackbar } = useSnackbar();

  const sendMessage = async ({ chatId, message }) => {
    try {
      const response = await request({
        url: '/messages',
        method: 'POST',
        data: { chat_id: chatId, message },
      });
      enqueueSnackbar(response.data.message || 'Message sent successfully', {
        variant: 'success',
      });
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Error sending message';
      enqueueSnackbar(errorMessage, { variant: 'error' });
      throw error;
    }
  };

  return useMutation({
    mutationFn: sendMessage,
    mutationKey: ['sendMessage'],
  });
};

export default useSendMessage;
