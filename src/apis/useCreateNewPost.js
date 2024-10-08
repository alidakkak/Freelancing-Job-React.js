import { useNavigate } from "react-router";
import { request } from './request';
import { useSnackbar } from "notistack";
import { useMutation } from "@tanstack/react-query";

const useCreateNewPost = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const CreateNewPost = (data) => {
    return request({
      url: '/posts/create',
      method: 'POST',
      headers: {
        "Content-Type": "multipart/form-data"
      },
      data
    });
  };

  const mutation = useMutation({
    mutationFn : CreateNewPost,
    mutationKey: ['createNewPost'],
    onSuccess: (data) => {
      enqueueSnackbar(data.message || "Successfully", {
        variant: 'success'
      });
       navigate('/posts');
    },
    onError: (error) => {
      const errorMessage = error.response?.data?.message || "Successfully";
      enqueueSnackbar(errorMessage, {
        variant: 'error'
      });
    }
  });

  return mutation;
};

export default useCreateNewPost;
