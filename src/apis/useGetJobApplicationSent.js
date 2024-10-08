import { useNavigate, useParams } from "react-router";
import { request } from './request';
import { useSnackbar } from "notistack";
import { useQuery } from "@tanstack/react-query";

const useGetJobApplicationSent = () => {
  const navigate = useNavigate();
  const {id} = useParams()
  const { enqueueSnackbar } = useSnackbar();

  const fetchJobApplicationSent =  () => {
    return request({
      url: '/applications/get_post',
      method: 'get',
      headers: {
        "Content-Type": "application/json"
      },
      params : {
        post_id : id
      }
    });
  };

  const query = useQuery({
    queryKey: ['getJobApplicationSent'],
    queryFn: fetchJobApplicationSent,
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

export default useGetJobApplicationSent;
