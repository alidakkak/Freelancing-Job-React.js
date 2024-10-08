import { LoginOutlined } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import {
  Box,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router";
import * as yup from "yup";
import useLogin from "../../../apis/useLogin";

const LoginForm = () => {
  const navigate = useNavigate();
  const login = useLogin()
  const registerSubmit = (values) => {
    console.log(values);
    login.mutate(values)
    // navigate("/fillInformation");
  };
  return (
    <Box>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={registerSubmit}
        validationSchema={yup.object({
          email: yup.string().email().required("email is required"),
          password: yup
            .string()
            .min(7)
            .max(26)
            .required("password is required"),
        })}
      >
        {({
          values,
          touched,
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <FormControl fullWidth margin="dense" color="primary">
              <InputLabel>Email</InputLabel>
              <OutlinedInput
                label="Email"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!errors.email && !!touched.email}
                value={values.email}
                name="email"
              />
              {!!errors.email && !!touched.email && (
                <FormHelperText error>{errors.email}</FormHelperText>
              )}
            </FormControl>
            <FormControl fullWidth margin="dense" color="primary">
              <InputLabel>Password</InputLabel>
              <OutlinedInput
                label="Password"
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!errors.password && !!touched.password}
                value={values.password}
                name="password"
              />
              {!!errors.password && !!touched.password && (
                <FormHelperText error>{errors.password}</FormHelperText>
              )}
            </FormControl>
            <LoadingButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              loadingPosition="start"
              startIcon={<LoginOutlined />}
              loading={login.isPending}
            >
              Login
            </LoadingButton>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default LoginForm;
