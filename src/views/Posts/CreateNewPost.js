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

const locations = [
  "Damascus",
  "Aleppo",
  "Hama",
  "Homs",
  "Latakia",
  "Tartus",
  "Raqqa",
  "Deir Elzor",
  "Idlib",
  "Daraa",
  "Qunetiera",
  "Alhasakah",
  "Damascus Countryside",
  "As Suwayda",
];

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

const enrollment = [
  "Full Time",
  "Part Time",
  "Three Quarters",
  "Remotely",
  "Hourly",
];

const validationSchema = Yup.object({
  general_job_title: Yup.string().required("مطلوب"),
  specialization: Yup.string().required("مطلوب"),
  enrollment_status: Yup.string().required("مطلوب"),
  prefered_gender: Yup.string().required("مطلوب"),
  prefered_experience: Yup.string().required("مطلوب"),
  detailed_location: Yup.string().required("مطلوب"),
  requirements: Yup.string().required("مطلوب"),
  promises: Yup.string().required("مطلوب"),
  job_information: Yup.string().required("مطلوب"),
  application_deadline: Yup.date().required("مطلوب"),
  expected_salary: Yup.string().required("مطلوب"),
});

const CreateNewPost = () => {
  const initialValues = {
    general_job_title: "",
    specialization: "",
    enrollment_status: "",
    prefered_gender: "",
    prefered_experience: "",
    detailed_location: "",
    requirements: "",
    promises: "",
    job_information: "",
    application_deadline: "",
    expected_salary: "",
  };

  const navigate = useNavigate();
  const newPost = useCreateNewPost();
  const [error, setError] = useState("");

  const CreateNewPostHandeler = async (values) => {
    try {
      await newPost.mutateAsync(values);
      navigate("/posts");
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
                error={
                  !!errors.general_job_title && !!touched.general_job_title
                }
              >
                <InputLabel>General Job Title</InputLabel>
                <Select
                  label="General Job Title"
                  name="general_job_title"
                  value={values.general_job_title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  {industries.map((industry) => (
                    <MenuItem key={industry} value={industry}>
                      {industry}
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
                error={!!errors.enrollment_status && !!touched.enrollment_status}
              >
                <InputLabel>Enrollment Status</InputLabel>
                <Select
                  label="enrollment_status"
                  name="enrollment_status"
                  value={values.enrollment_statu}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  {enrollment.map((enrollment) => (
                    <MenuItem key={enrollment} value={enrollment}>
                      {enrollment}
                    </MenuItem>
                  ))}
                </Select>
                {!!errors.enrollment_status && !!touched.enrollment_status && (
                  <FormHelperText>{errors.enrollment_status}</FormHelperText>
                )}
              </FormControl>
              <FormControl
                fullWidth
                margin="dense"
                color="primary"
                error={!!errors.prefered_gender && !!touched.prefered_gender}
              >
                <InputLabel>Preferred Gender</InputLabel>
                <OutlinedInput
                  name="prefered_gender"
                  label="Preferred Gender"
                  value={values.prefered_gender}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {!!errors.prefered_gender && !!touched.prefered_gender && (
                  <FormHelperText error>
                    {errors.prefered_gender}
                  </FormHelperText>
                )}
              </FormControl>
              <FormControl
                fullWidth
                margin="dense"
                color="primary"
                error={
                  !!errors.prefered_experience && !!touched.prefered_experience
                }
              >
                <InputLabel>Preferred Experience</InputLabel>
                <OutlinedInput
                  name="prefered_experience"
                  label="Preferred Experience"
                  value={values.prefered_experience}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {!!errors.prefered_experience &&
                  !!touched.prefered_experience && (
                    <FormHelperText error>
                      {errors.prefered_experience}
                    </FormHelperText>
                  )}
              </FormControl>
              <FormControl
                fullWidth
                margin="dense"
                color="primary"
                error={
                  !!errors.detailed_location && !!touched.detailed_location
                }
              >
                <InputLabel>Location</InputLabel>
                <Select
                  label="Location"
                  name="detailed_location"
                  value={values.detailed_location}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  {locations.map((location) => (
                    <MenuItem key={location} value={location}>
                      {location}
                    </MenuItem>
                  ))}
                </Select>
                {!!errors.detailed_location && !!touched.detailed_location && (
                  <FormHelperText>{errors.detailed_location}</FormHelperText>
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
                error={!!errors.promises && !!touched.promises}
              >
                <InputLabel>Promises</InputLabel>
                <OutlinedInput
                  name="promises"
                  label="Promises"
                  value={values.promises}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {!!errors.promises && !!touched.promises && (
                  <FormHelperText error>{errors.promises}</FormHelperText>
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
                  <FormHelperText error>
                    {errors.job_information}
                  </FormHelperText>
                )}
              </FormControl>
              <FormControl
                fullWidth
                margin="dense"
                color="primary"
                error={
                  !!errors.application_deadline &&
                  !!touched.application_deadline
                }
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
                {!!errors.application_deadline &&
                  !!touched.application_deadline && (
                    <FormHelperText error>
                      {errors.application_deadline}
                    </FormHelperText>
                  )}
              </FormControl>
              <FormControl
                fullWidth
                margin="dense"
                color="primary"
                error={!!errors.expected_salary && !!touched.expected_salary}
              >
                <InputLabel>Expected Salary</InputLabel>
                <OutlinedInput
                  name="expected_salary"
                  label="Expected Salary"
                  value={values.expected_salary}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {!!errors.expected_salary && !!touched.expected_salary && (
                  <FormHelperText error>
                    {errors.expected_salary}
                  </FormHelperText>
                )}
              </FormControl>
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

export default CreateNewPost;
