import { useNavigate } from "react-router";
import { request } from './request';
import { useSnackbar } from "notistack";
import { useMutation } from "@tanstack/react-query";

const useCreateNewPostFreelancing = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const CreateNewPostFreelancing = (data) => {
    return request({
      url: '/freelancing_posts/create',
      method: 'POST',
      headers: {
        "Content-Type": "multipart/form-data"
      },
      data
    });
  };

  const mutation = useMutation({
    mutationFn : CreateNewPostFreelancing,
    mutationKey: ['createNewPostFreelancing'],
    onSuccess: (data) => {
      enqueueSnackbar(data.message || "Successfully", {
        variant: 'success'
      });
       navigate('/freelancingPosts');
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

export default useCreateNewPostFreelancing;
