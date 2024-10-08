import { useNavigate } from "react-router";
import { request } from './request';
import { useSnackbar } from "notistack";
import { useQuery } from "@tanstack/react-query";

const useGetPostsFreelancing = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const fetchPostsFreelancing = async () => {
    const response = await request({
      url: '/freelancing_posts/get',
      method: 'get',
      headers: {
        "Content-Type": "application/json"
      }
    });
    return response.data;
  };

  const query = useQuery({
    queryKey: ['getPosts'],
    queryFn: fetchPostsFreelancing,
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

export default useGetPostsFreelancing;
