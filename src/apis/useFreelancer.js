import { useNavigate } from "react-router";
import { request } from './request';
import { useSnackbar } from "notistack";
import { useMutation } from "@tanstack/react-query";

const useFreelancer = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const Freelancer = (data) => {
    return request({
      url: '/information/freelancing_owner',
      method: 'POST',
      headers: {
        "Content-Type": "multipart/form-data"
      },
      data
    });
  };

  const mutation = useMutation({
    mutationFn : Freelancer,
    mutationKey: ['freelancer'],
    onSuccess: (data) => {
      enqueueSnackbar(data.message || "Successfully", {
        variant: 'success'
      });
       navigate('/home');
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

export default useFreelancer;
