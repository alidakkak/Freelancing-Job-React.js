import { ChatOutlined, HomeOutlined, PostAddOutlined, WorkOutlined } from "@mui/icons-material";

// Retrieve the role from localStorage
const role = localStorage.getItem("role");

// Define the base menu items
const baseMenuItems = [
  {
    id: 1,
    header: "Home",
    path: "/home",
    icon: <HomeOutlined />,
  },
  {
    id: 5,
    header: "Chat",
    path: "/chat",
    icon: <ChatOutlined />,
  },
];

// Define the conditional menu items based on the role
let conditionalMenuItems = [];

if (role === "COMPANY") {
  conditionalMenuItems = [
    {
      id: 2,
      header: "Company Posts",
      path: "/posts",
      icon: <PostAddOutlined />,
    },
    {
      id: 4,
      header: "Job Application Company",
      path: "/jobApplications",
      icon: <WorkOutlined />,
    },
  ];
} else {
  conditionalMenuItems = [
    {
      id: 3,
      header: "Freelancing Posts",
      path: "/freelancingPosts",
      icon: <PostAddOutlined />,
    },
    {
      id: 4,
      header: "Job Application Freelancing",
      path: "/jobApplicationfreelancing",
      icon: <WorkOutlined />,
    },
  ];
}

// Combine base menu items with the conditional items
export const menuItems = [...baseMenuItems, ...conditionalMenuItems];