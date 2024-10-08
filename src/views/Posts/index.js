import { Box, Button, IconButton } from "@mui/material";
import React, { useMemo, useEffect } from "react";
import { MaterialReactTable, useMaterialReactTable } from "material-react-table";
import { CreateOutlined, MoreOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import useGetPosts from "../../apis/useGetPosts";

const PostsPage = () => {
  const { data, isLoading} = useGetPosts();

  // useEffect(() => {
  //   refetch();
  // }, [refetch]);

  const columns = useMemo(
    () => [
      {
        accessorKey: "company_id",
        header: "CompanyID",
        size: 150,
      },
      {
        accessorKey: "company_name",
        header: "Company Name",
        size: 150,
      },
      {
        accessorKey: "company_logo",
        header: "Logo",
        size: 200,
        Cell: ({ row }) => (
          <img
            src={row.original.company_logo}
            alt="Company Logo"
            style={{ width: '100px', height: 'auto' }}
          />
        ),
      },
      {
        accessorKey: "company_location",
        header: "Company Location",
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
        accessorKey: "enrollment_status",
        header: "Enrollment Status",
        size: 150,
      },
      {
        accessorKey: "prefered_experience",
        header: "Preferred Experience",
        size: 150,
      },
      {
        accessorKey: "detailed_location",
        header: "Detailed Location",
        size: 200,
      },
      {
        accessorKey: "requirements",
        header: "Requirements",
        size: 250,
      },
      {
        accessorKey: "promises",
        header: "Promises",
        size: 150,
      },
      {
        accessorKey: "job_information",
        header: "Job Information",
        size: 250,
      },
      {
        accessorKey: "application_deadline",
        header: "Application Deadline",
        size: 150,
      },
      {
        accessorKey: "expected_salary",
        header: "Expected Salary",
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
      <IconButton component={Link} to={`/posts/get/${row.original.id}`}>
        <MoreOutlined />
      </IconButton>
    ),
  });



  return (
    <Box>
      <Button
        startIcon={<CreateOutlined />}
        component={Link}
        to={"/posts/create"}
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

export default PostsPage;
