import { useNavigate } from "react-router";
import { request } from "./request";
import { useSnackbar } from "notistack";
import { useMutation } from "@tanstack/react-query";
import useOnSuccess from "./useOnSuccess";

const useLogin = () => {
   const { successHandeler } = useOnSuccess();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const userLogin = (data) => {
    return request({
      url: "/login",
      method: "POST",
      data,
    });
  };

  const mutation = useMutation({
    mutationFn: userLogin,
    mutationKey: ["login"],
    onSuccess: (data) => {
      enqueueSnackbar('Successfully logged in', { variant: "success" });
      successHandeler(data, () => {
        const token = data.data.data.access_token;
        const role = data.data.role;
        const added_information = data.data.added_information;
        localStorage.setItem('token', token);
        localStorage.setItem('role', role);
        if(added_information === 0) {
          navigate("/fillInformation");
        } else navigate('/home');
      });
    },
    onError: (error) => {
      if (error.response) {
        enqueueSnackbar(error.response?.data?.message || "Email or Password Incorrect", { variant: 'error' });
      } else {
        enqueueSnackbar("An unexpected error occurred", { variant: 'error' });
      }
    },
  });

  return mutation;
};

export default useLogin;
