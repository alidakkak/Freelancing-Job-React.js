
import ChatLayout from "../Layouts/ChatLayout";
import MainChatComponent from "../views/Chat";

export const chatRoute = {
  path: "",
  element: <ChatLayout />,
  children: [
    {
      path: "chat",
      element: <MainChatComponent />,
    },
  ],
};
