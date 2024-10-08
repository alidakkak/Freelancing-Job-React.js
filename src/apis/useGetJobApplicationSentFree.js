import { useNavigate, useParams } from "react-router";
import { request } from './request';
import { useSnackbar } from "notistack";
import { useQuery } from "@tanstack/react-query";

const useGetJobApplicationSentFree = () => {
  const navigate = useNavigate();
  const {id} = useParams()
  const { enqueueSnackbar } = useSnackbar();

  const fetchJobApplicationSentFree =  () => {
    return request({
      url: '/applications/get_freelance_post',
      method: 'get',
      headers: {
        "Content-Type": "application/json"
      },
      params : {
        freelance_post_id : id
      }
    });
  };

  const query = useQuery({
    queryKey: ['getJobApplicationSentFree'],
    queryFn: fetchJobApplicationSentFree,
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

export default useGetJobApplicationSentFree;
