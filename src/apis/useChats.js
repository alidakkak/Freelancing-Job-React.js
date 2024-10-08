import { useQuery } from '@tanstack/react-query';
import { useSnackbar } from 'notistack';
import { request } from './request'; // Adjust path if necessary

const useChats = () => {
  const { enqueueSnackbar } = useSnackbar();

  const fetchChats = async () => {
    try {
      const response = await request({
        url: '/chat',
        method: 'GET',
      });
      console.log(response);
      return response.data.chats;
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Error fetching chats';
      enqueueSnackbar(errorMessage, { variant: 'error' });
      throw error;
    }
  };

  return useQuery({
    queryKey: ['chat'],
    queryFn: fetchChats,
  });
};

export default useChats;
