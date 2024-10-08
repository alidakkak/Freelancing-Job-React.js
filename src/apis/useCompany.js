import { useNavigate } from "react-router";
import { request } from './request';
import { useSnackbar } from "notistack";
import { useMutation } from "@tanstack/react-query";

const useCompany = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const Company = (data) => {
    return request({
      url: '/information/company',
      method: 'POST',
      headers: {
        "Content-Type": "multipart/form-data"
      },
      data
    });
  };

  const mutation = useMutation({
    mutationFn : Company,
    mutationKey: ['company'],
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

export default useCompany;
