import {
  CameraOutlined,
  DownloadOutlined,
  SaveOutlined,
} from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  styled,
} from "@mui/material";
import { Formik } from "formik";
import React, { useState } from "react";
import * as yup from "yup";
import MuiImage from "../../ui-components/MuiImage";
import { LoadingButton } from "@mui/lab";
import { useNavigate } from "react-router";
import useFreelancer from "../../apis/useFreelancer";
import useCompany from "../../apis/useCompany";

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

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const CompanyForm = ({ type }) => {
  const navigate = useNavigate();
  const company = useCompany();
  const [error, setError] = useState("");

  const companyHandeler = async (values) => {
    try {
      await company.mutateAsync(values);
      navigate("/home");
    } catch (err) {
      setError("An error occurred, please try again.");
    }
  };

  return (
    <Box>
      <Formik
        onSubmit={companyHandeler}
        initialValues={{
          company_name: "",
          company_logo: "",
          company_website: "",
          company_email: "",
          company_location: "",
          company_size: "",
          company_industry: "",
          social_media_links: [],
          founding_year: "",
        }}
        validationSchema={yup.object({
          company_name: yup.string().required("name is required"),
          company_website: yup.string().required("website is required"),
          company_location: yup
            .string()
            .required("company_location is required"),
          company_email: yup.string().email().required("email is required"),
          company_size: yup.string().required("size is required"),
          company_industry: yup
            .string()
            .required("company_industry is required"),
          social_media_links: yup
            .array()
            .of(yup.string())
            .required("social media links are required"),
          founding_year: yup.string().required("founding year is required"),
          company_logo: yup.mixed().required("logo is required"),
        })}
      >
        {({
          handleBlur,
          handleChange,
          handleSubmit,
          values,
          errors,
          touched,
          setFieldValue,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "250px",
                  border: (theme) => `1px solid ${theme.palette.grey[500]}`,
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
                component="label"
                role={undefined}
              >
                <VisuallyHiddenInput
                  type="file"
                  name="company_logo"
                  onBlur={handleBlur}
                  accept="image/jpg,image/png,image/jpeg"
                  onChange={(e) => {
                    setFieldValue("company_logo", e.target.files[0]);
                  }}
                />

                {values.company_logo ? (
                  <MuiImage
                    sx={{ height: "200px", textAlign: "center" }}
                    src={URL.createObjectURL(values.company_logo)}
                  />
                ) : (
                  <CameraOutlined fontSize="large" />
                )}
              </Box>
              {!!errors.company_logo && !!touched.company_logo && (
                <FormHelperText error>{errors.company_logo}</FormHelperText>
              )}
            </Box>
            <FormControl fullWidth margin="dense" color="primary">
              <InputLabel>Company Name</InputLabel>
              <OutlinedInput
                label="Company Name"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!errors.company_name && !!touched.company_name}
                value={values.company_name}
                name="company_name"
              />
              {!!errors.company_name && !!touched.company_name && (
                <FormHelperText error>{errors.company_name}</FormHelperText>
              )}
            </FormControl>
            <FormControl fullWidth margin="dense" color="primary">
              <InputLabel>Email</InputLabel>
              <OutlinedInput
                label="Email"
                type="email"
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!errors.company_email && !!touched.company_email}
                value={values.company_email}
                name="company_email"
              />
              {!!errors.company_email && !!touched.company_email && (
                <FormHelperText error>{errors.company_email}</FormHelperText>
              )}
            </FormControl>
            <FormControl fullWidth margin="dense" color="primary">
              <InputLabel>Website Link</InputLabel>
              <OutlinedInput
                label="Website Link"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!errors.company_website && !!touched.company_website}
                value={values.company_website}
                name="company_website"
              />
              {!!errors.company_website && !!touched.company_website && (
                <FormHelperText error>{errors.company_website}</FormHelperText>
              )}
            </FormControl>
            <FormControl
              fullWidth
              margin="dense"
              color="primary"
              error={!!errors.company_location && !!touched.company_location}
            >
              <InputLabel>Location</InputLabel>
              <Select
                label="Location"
                name="company_location"
                value={values.company_location}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                {locations.map((location) => (
                  <MenuItem key={location} value={location}>
                    {location}
                  </MenuItem>
                ))}
              </Select>
              {!!errors.company_location && !!touched.company_location && (
                <FormHelperText>{errors.company_location}</FormHelperText>
              )}
            </FormControl>
            <FormControl fullWidth margin="dense" color="primary">
              <InputLabel>Company Size</InputLabel>
              <OutlinedInput
                label="company Size"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!errors.company_size && !!touched.company_size}
                value={values.company_size}
                name="company_size"
              />
              {!!errors.company_size && !!touched.company_size && (
                <FormHelperText error>{errors.company_size}</FormHelperText>
              )}
            </FormControl>
            <FormControl
              fullWidth
              margin="dense"
              color="primary"
              error={!!errors.company_industry && !!touched.company_industry}
            >
              <InputLabel>Industry</InputLabel>
              <Select
                label="Industry"
                name="company_industry"
                value={values.company_industry}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                {industries.map((industry) => (
                  <MenuItem key={industry} value={industry}>
                    {industry}
                  </MenuItem>
                ))}
              </Select>
              {!!errors.company_industry && !!touched.company_industry && (
                <FormHelperText>{errors.company_industry}</FormHelperText>
              )}
            </FormControl>
            <FormControl fullWidth margin="dense" color="primary">
              <InputLabel>Founding Year</InputLabel>
              <OutlinedInput
                label="Founding Year"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!errors.founding_year && !!touched.founding_year}
                value={values.founding_year}
                name="founding_year"
              />
              {!!errors.founding_year && !!touched.founding_year && (
                <FormHelperText error>{errors.founding_year}</FormHelperText>
              )}
            </FormControl>
            <FormControl fullWidth margin="dense" color="primary">
              <Autocomplete
                multiple
                options={[]}
                freeSolo
                value={values.social_media_links}
                onChange={(event, newValue) => {
                  setFieldValue("social_media_links", newValue);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    label="Social Media Links"
                    placeholder="Add social media links"
                    error={
                      !!errors.social_media_links &&
                      !!touched.social_media_links
                    }
                  />
                )}
              />
              {!!errors.social_media_links && !!touched.social_media_links && (
                <FormHelperText error>
                  {errors.social_media_links}
                </FormHelperText>
              )}
            </FormControl>
            {!!error && <Box sx={{ color: "red", mt: 2 }}>{error}</Box>}
            <LoadingButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              loadingPosition="start"
              loading={company.isPending}
              startIcon={<DownloadOutlined fontSize="medium" />}
            >
              {" "}
              Finish
            </LoadingButton>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const FreelancerForm = ({ type }) => {
  const navigate = useNavigate();
  const freelancer = useFreelancer();
  const [error, setError] = useState("");

  const freelancerHandeler = async (values) => {
    try {
      await freelancer.mutateAsync(values);
      navigate("/home");
    } catch (err) {
      setError("An error occurred, please try again.");
    }
  };

  return (
    <Box>
      <Formik
        onSubmit={freelancerHandeler}
        initialValues={{
          name: "",
          profile_photo: "",
          gender: "male",
          phone_number: "",
          location: "",
          bio: "",
          languages: "",
        }}
        validationSchema={yup.object({
          name: yup.string().required("name is required"),
          gender: yup.string().required("gender is required"),
          location: yup.string().required("location is required"),
          phone_number: yup.string().required("phone_number is required"),
          bio: yup.string().required("bio is required"),
          languages: yup.string().required("languages is required"),
          profile_photo: yup.mixed().required("image is required"),
        })}
      >
        {({
          handleBlur,
          handleChange,
          handleSubmit,
          values,
          errors,
          touched,
          setFieldValue,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "250px",
                  border: (theme) => `1px solid ${theme.palette.grey[500]}`,
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
                component="label"
                role={undefined}
              >
                <VisuallyHiddenInput
                  type="file"
                  name="profile_photo"
                  onBlur={handleBlur}
                  accept="image/jpg,image/png,image/jpeg"
                  onChange={(e) => {
                    setFieldValue("profile_photo", e.target.files[0]);
                  }}
                />

                {values.profile_photo ? (
                  <MuiImage
                    sx={{ height: "200px", textAlign: "center" }}
                    src={URL.createObjectURL(values.profile_photo)}
                  />
                ) : (
                  <CameraOutlined fontSize="large" />
                )}
              </Box>
              {!!errors.profile_photo && !!touched.profile_photo && (
                <FormHelperText error>{errors.profile_photo}</FormHelperText>
              )}
            </Box>
            <FormControl fullWidth margin="dense" color="primary">
              <InputLabel>Name</InputLabel>
              <OutlinedInput
                label="Name"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!errors.name && !!touched.name}
                value={values.name}
                name="name"
              />
              {!!errors.name && !!touched.name && (
                <FormHelperText error>{errors.name}</FormHelperText>
              )}
            </FormControl>
            <FormControl fullWidth margin="dense" color="primary">
              <InputLabel>Gender</InputLabel>
              <Select
                label="Gender"
                fullWidth
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!errors.gender && !!touched.gender}
                value={values.gender}
                name="gender"
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
              </Select>
              {!!errors.gender && !!touched.gender && (
                <FormHelperText error>{errors.gender}</FormHelperText>
              )}
            </FormControl>
            <FormControl fullWidth margin="dense" color="primary">
              <InputLabel>Phone</InputLabel>
              <OutlinedInput
                label="Phone"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!errors.phone_number && !!touched.phone_number}
                value={values.phone_number}
                name="phone_number"
              />
              {!!errors.phone_number && !!touched.phone_number && (
                <FormHelperText error>{errors.phone_number}</FormHelperText>
              )}
            </FormControl>
            <FormControl
              fullWidth
              margin="dense"
              color="primary"
              error={!!errors.location && !!touched.location}
            >
              <InputLabel>Location</InputLabel>
              <Select
                label="Location"
                name="location"
                value={values.location}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                {locations.map((location) => (
                  <MenuItem key={location} value={location}>
                    {location}
                  </MenuItem>
                ))}
              </Select>
              {!!errors.location && !!touched.location && (
                <FormHelperText>{errors.company_location}</FormHelperText>
              )}
            </FormControl>
            <FormControl fullWidth margin="dense" color="primary">
              <InputLabel>languages</InputLabel>
              <OutlinedInput
                label="languages"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!errors.languages && !!touched.languages}
                value={values.languages}
                name="languages"
              />
              {!!errors.languages && !!touched.languages && (
                <FormHelperText error>{errors.languages}</FormHelperText>
              )}
            </FormControl>
            {/* </FormControl> */}
            <FormControl fullWidth margin="dense" color="primary">
              <TextField
                label="Bio"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                multiline
                rows={6}
                value={values.bio}
                name="bio"
              />
              {!!errors.bio && !!touched.bio && (
                <FormHelperText error>{errors.bio}</FormHelperText>
              )}
            </FormControl>
            {!!error && <Box sx={{ color: "red", mt: 2 }}>{error}</Box>}
            <LoadingButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              loadingPosition="start"
              loading={freelancer.isPending}
              startIcon={<DownloadOutlined fontSize="medium" />}
            >
              {" "}
              Finish
            </LoadingButton>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const InformationForm = () => {
  const [type, setType] = useState("company");
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Button
          sx={{
            width: type === "company" ? "70%" : "50%",
            borderRadius: "4px 0 0 4px",
            transition: "0.3s",
          }}
          onClick={() => {
            setType("company");
          }}
          variant={type === "company" ? "contained" : ""}
        >
          company
        </Button>
        <Button
          sx={{
            width: type === "freelancer" ? "70%" : "50%",
            borderRadius: "0px 4px 4px 0px",
            transition: "0.3s",
          }}
          onClick={() => {
            setType("freelancer");
          }}
          variant={type === "freelancer" ? "contained" : ""}
        >
          need a freelancer
        </Button>
      </Box>

      {type === "company" ? (
        <CompanyForm type={type} />
      ) : (
        <FreelancerForm type={type} />
      )}
    </Box>
  );
};

export default InformationForm;
