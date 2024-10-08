import MainLayout from "../Layouts/MainLayout";
import HomePage from "../views/Home";
import JobApplicationSent from "../views/JobApplicationSent/JobApplicationSent";
import JobApplicationsPage from "../views/JobApplicationsPage";
import PostsPage from "../views/Posts";
import CreateNewPost from "../views/Posts/CreateNewPost";
import CreateNewPostFreelancing from "../views/Posts/CreateNewPostFreelancing";
import PostsPageFreelancing from "../views/Posts/indexFreelancing";
import PostDetailPage from "../views/Posts/PostDetailPage";// Ensure this import exists
import JobApplicationSentFree from '../views/JobApplicationSentFree/JobApplicationSent'
import JobApplicationsPageFree from "../views/JobApplicationsPageFree"

import {
  ChatOutlined,
  HomeOutlined,
  PostAddOutlined,
  WorkOutlined,
} from "@mui/icons-material";

// Define the main routes
export const mainRoutes = {
  path: "",
  element: <MainLayout />,
  children: [
    {
      path: "home",
      element: <HomePage />,
    },
    {
      path: "posts",
      children: [
        {
          path: "",
          element: <PostsPage />,
        },
        {
          path: "create",
          element: <CreateNewPost />,
        },
        {
          path: ":id",
          element: <PostDetailPage />,
        },
      ],
    },
    {
      path: "freelancingPosts",
      children: [
        {
          path: "",
          element: <PostsPageFreelancing />,
        },
        {
          path: "createFreelancing",
          element: <CreateNewPostFreelancing />,
        },
        {
          path: ":id",
          element: <PostDetailPage />,
        },
      ],
    },
    {
      path: "jobApplications",
      children: [
        {
          path: "",
          element: <JobApplicationsPage />,
        },
        {
          path: ":id",
          children: [
            {
              path: "applicationsSent",
              element: <JobApplicationSent />,
            },
          ],
        },
      ],
    },
    {
      path: "jobApplicationfreelancing",
      children: [
        {
          path: "",
          element: <JobApplicationsPageFree />,
        },
        {
          path: ":id",
          children: [
            {
              path: "applicationsSentFree",
              element: <JobApplicationSentFree />,
            },
          ],
        },
      ],
    },
  ],
};