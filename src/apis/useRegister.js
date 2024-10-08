import { useNavigate } from "react-router";
import { request } from './request';
import { useSnackbar } from "notistack";
import { useMutation } from "@tanstack/react-query";

const useRegister = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const registerUser = (data) => {
    return request({
      url: '/register',
      method: 'POST',
      headers: {
        "Content-Type": "multipart/form-data"
      },
      data
    });
  };

  const mutation = useMutation({
    mutationFn : registerUser,
    mutationKey: ['register'],
    onSuccess: (data) => {
      enqueueSnackbar(data.message || "Registered successfully", {
        variant: 'success'
      });
      navigate('/login');
    },
    onError: (error) => {
      const errorMessage = error.response?.data?.message || "Registration not successful";
      enqueueSnackbar(errorMessage, {
        variant: 'error'
      });
    }
  });

  return mutation;
};

export default useRegister;
