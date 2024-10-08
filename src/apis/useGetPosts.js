import { useNavigate } from "react-router";
import { request } from './request';
import { useSnackbar } from "notistack";
import { useQuery } from "@tanstack/react-query";

const useGetPosts = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const fetchPosts = async () => {
    const response = await request({
      url: '/posts/get',
      method: 'get',
      headers: {
        "Content-Type": "application/json"
      }
    });
    return response.data;
  };

  const query = useQuery({
    queryKey: ['getPostsF'],
    queryFn: fetchPosts,
    onSuccess: (data) => {
      enqueueSnackbar(data.message || "Successfully fetched posts", {
        variant: 'success'
      });
    },
    onError: (error) => {
      const errorMessage = error.response?.data?.message || "Error fetching posts";
      enqueueSnackbar(errorMessage, {
        variant: 'error'
      });
    }
  });

  return query;
};

export default useGetPosts;
