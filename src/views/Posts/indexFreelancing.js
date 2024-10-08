import { Box, Button, IconButton } from "@mui/material";
import React, { useMemo } from "react";
import { MaterialReactTable, useMaterialReactTable } from "material-react-table";
import { CreateOutlined, MoreOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import useGetPosts from "../../apis/useGetPosts";
import useGetPostsFreelancing from "../../apis/useGetPostsFreelancings";

const PostsPageFreelancing = () => {
  const { data, isLoading} = useGetPostsFreelancing();

  const columns = useMemo(
    () => [
      {
        accessorKey: "freelancer_id",
        header: "FreelancerID",
        size: 150,
      },
      {
        accessorKey: "profile_photo",
        header: "Profile Photo",
        size: 200,
        Cell: ({ row }) => (
            <img
              src={row.original.profile_photo}
              alt="Profile"
              style={{ width: '100px', height: 'auto' }}
            />
          ),
      },
      {
        accessorKey: "phone_number",
        header: "Phone Number",
        size: 150,
      },
      {
        accessorKey: "location",
        header: "Location",
        size: 150,
      },
      {
        accessorKey: "general_job_title",
        header: "General Job Title",
        size: 150,
      },
      {
        accessorKey: "specialization",
        header: "Specialization",
        size: 150,
      },
      {
        accessorKey: "earnings",
        header: "Earnings",
        size: 150,
      },
      {
        accessorKey: "job_information",
        header: "Job Information",
        size: 250,
      },
      {
        accessorKey: "requirements",
        header: "Requirements",
        size: 250,
      },
      {
        accessorKey: "application_deadline",
        header: "Application Deadline",
        size: 150,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: data?.data || [], // Use fetched posts data or empty array
    enableTopToolbar: false,
    enableColumnActions: false,
    enableSorting: false,
    enableRowActions: true,
    renderRowActions: ({ row }) => (
      <IconButton component={Link} to={`/freelancing_posts/get/${row.original.id}`}>
        <MoreOutlined />
      </IconButton>
    ),
  });

  return (
    <Box>
      <Button
        startIcon={<CreateOutlined />}
        component={Link}
        to={"/freelancingPosts/createFreelancing"}
        variant="contained"
        color="primary"
        sx={{
          mb: 2,
        }}
      >
        Create New Post
      </Button>
      <MaterialReactTable table={table} />
    </Box>
  );
};

export default PostsPageFreelancing;
