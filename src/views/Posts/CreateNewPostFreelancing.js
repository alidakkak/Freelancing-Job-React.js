import { DownloadOutlined } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import {
  Box,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import { Formik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import * as Yup from "yup";
import useCreateNewPost from "../../apis/useCreateNewPost";
import useCreateNewPostFreelancing from "../../apis/useCreateNewPostFreelancing";

const industries = [
  "Accounting",
  "Administrative",
  "Arts and Design",
  "Business Development",
  "Community and Social Services",
  "Consulting",
  "Education",
  "Engineering",
  "Entrepreneurship",
  "Finance",
  "Healthcare Services",
  "Human Resources",
  "Information Technology",
  "Legal",
  "Marketing",
  "Media and Communication",
  "Military and Protective Services",
  "Operations",
  "Product Management",
  "Program and Project Management",
  "Purchasing",
  "Quality Assurance",
  "Real Estate",
  "Research",
  "Sales",
  "Support",
  "Tourism",
  "Others",
];

const validationSchema = Yup.object({
  general_job_title: Yup.string().required("مطلوب"),
  specialization: Yup.string().required("مطلوب"),
  earnings: Yup.string().required("مطلوب"),
  job_information: Yup.string().required("مطلوب"),
  requirements: Yup.string().required("مطلوب"),
  application_deadline: Yup.date().required("مطلوب"),
});

const CreateNewPostFreelancing = () => {
  const initialValues = {
    general_job_title: "",
    specialization: "",
    earnings: "",
    job_information: "",
    requirements: "",
    application_deadline: "",
  };

  const navigate = useNavigate();
  const newPost = useCreateNewPostFreelancing();
  const [error, setError] = useState("");

  const CreateNewPostHandeler = async (values) => {
    try {
      await newPost.mutateAsync(values);
      navigate("/freelancingPosts");
    } catch (err) {
      setError("An error occurred, please try again.");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "calc(100vh - 60px)",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: "80%", md: "70%", lg: "60%" },
        }}
      >
        <Formik
          onSubmit={CreateNewPostHandeler}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          {({
            handleBlur,
            handleChange,
            handleSubmit,
            values,
            touched,
            errors,
          }) => (
            <form onSubmit={handleSubmit}>
            <FormControl
              fullWidth
              margin="dense"
              color="primary"
              error={!!errors.general_job_title && !!touched.general_job_title}
            >
              <InputLabel>General job Title</InputLabel>
              <Select
                label="General job Title"
                name="general_job_title"
                value={values.general_job_title}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                {industries.map((industrie) => (
                  <MenuItem key={industrie} value={industrie}>
                    {industrie}
                  </MenuItem>
                ))}
              </Select>
              {!!errors.general_job_title && !!touched.general_job_title && (
                <FormHelperText>{errors.general_job_title}</FormHelperText>
              )}
            </FormControl>
              <FormControl
                fullWidth
                margin="dense"
                color="primary"
                error={!!errors.specialization && !!touched.specialization}
              >
                <InputLabel>Specialization</InputLabel>
                <OutlinedInput
                  name="specialization"
                  label="Specialization"
                  value={values.specialization}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {!!errors.specialization && !!touched.specialization && (
                  <FormHelperText error>{errors.specialization}</FormHelperText>
                )}
              </FormControl>
              <FormControl
                fullWidth
                margin="dense"
                color="primary"
                error={!!errors.earnings && !!touched.earnings}
              >
                <InputLabel>Earnings</InputLabel>
                <OutlinedInput
                  name="earnings"
                  label="Earnings"
                  value={values.earnings}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {!!errors.earnings && !!touched.earnings && (
                  <FormHelperText error>{errors.earnings}</FormHelperText>
                )}
              </FormControl>
              <FormControl
                fullWidth
                margin="dense"
                color="primary"
                error={!!errors.job_information && !!touched.job_information}
              >
                <InputLabel>Job Information</InputLabel>
                <OutlinedInput
                  name="job_information"
                  label="Job Information"
                  value={values.job_information}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {!!errors.job_information && !!touched.job_information && (
                  <FormHelperText error>{errors.job_information}</FormHelperText>
                )}
              </FormControl>
              <FormControl
                fullWidth
                margin="dense"
                color="primary"
                error={!!errors.requirements && !!touched.requirements}
              >
                <InputLabel>Requirements</InputLabel>
                <OutlinedInput
                  name="requirements"
                  label="Requirements"
                  value={values.requirements}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {!!errors.requirements && !!touched.requirements && (
                  <FormHelperText error>{errors.requirements}</FormHelperText>
                )}
              </FormControl>
              <FormControl
                fullWidth
                margin="dense"
                color="primary"
                error={!!errors.application_deadline && !!touched.application_deadline}
              >
                <InputLabel>Application Deadline</InputLabel>
                <OutlinedInput
                  name="application_deadline"
                  type="date"
                  label="Application Deadline"
                  value={values.application_deadline}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {!!errors.application_deadline && !!touched.application_deadline && (
                  <FormHelperText error>{errors.application_deadline}</FormHelperText>
                )}
              </FormControl>
              {!!error && (
                <Box sx={{ color: 'red', mt: 2 }}>
                  {error}
                </Box>
              )}
              <LoadingButton
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                loadingPosition="start"
                loading={newPost.isPending}
                startIcon={<DownloadOutlined fontSize="medium" />}
              >
                Publish the Job Post
              </LoadingButton>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default CreateNewPostFreelancing;
