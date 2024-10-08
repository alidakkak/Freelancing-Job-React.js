
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedConversationID: null,
  selctedConversation : null,
  conversations: [
    {
      id: 1,
      name: "Alice Smith",
      image: "https://picsum.photos/id/1011/200/200",
      messages: [
        { id: 1, sender: 1, text: "Hi there!", time: "09:25" },
        { id: 2, sender: 2, text: "Hello!", time: "09:25" },
      ],
    },
    {
      id: 2,
      name: "Bob Johnson",
      image: "https://picsum.photos/id/1012/200/200",
      messages: [
        { id: 1, sender: 1, text: "Good morning!", time: "Yesterday" },
        { id: 2, sender: 2, text: "Morning!", time: "Yesterday" },
      ],
    },
    {
      id: 3,
      name: "Charlie Brown",
      image: "https://picsum.photos/id/1013/200/200",
      messages: [
        {
          id: 1,
          sender: 1,
          text: "Are you coming to the party?",
          time: "2024-07-09",
        },
        { id: 2, sender: 2, text: "Yes, I'll be there.", time: "2024-07-09" },
      ],
    },
    {
      id: 4,
      name: "Daisy Ridley",
      image: "https://picsum.photos/id/1014/200/200",
      messages: [
        { id: 1, sender: 1, text: "How are you?", time: "09:25" },
        { id: 2, sender: 2, text: "I'm good, thanks!", time: "09:25" },
      ],
    },
    {
      id: 5,
      name: "Eve Torres",
      image: "https://picsum.photos/id/1015/200/200",
      messages: [
        { id: 1, sender: 1, text: "Let's meet up.", time: "Yesterday" },
        { id: 2, sender: 2, text: "Sure, where?", time: "Yesterday" },
      ],
    },
    {
      id: 6,
      name: "Frank Castle",
      image: "https://picsum.photos/id/1016/200/200",
      messages: [
        {
          id: 1,
          sender: 1,
          text: "Did you get the report?",
          time: "2024-07-08",
        },
        { id: 2, sender: 2, text: "Yes, I did.", time: "2024-07-08" },
      ],
    },
    {
      id: 7,
      name: "Grace Hopper",
      image: "https://picsum.photos/id/1011/200/200",
      messages: [
        { id: 1, sender: 1, text: "Happy Birthday!", time: "09:25" },
        { id: 2, sender: 2, text: "Thank you!", time: "09:25" },
      ],
    },
    {
      id: 8,
      name: "Hank Pym",
      image: "https://picsum.photos/id/1018/200/200",
      messages: [
        {
          id: 1,
          sender: 1,
          text: "Are we still on for tomorrow? Are we still on for tomorrow?Are we still on for tomorrow?Are we still on for tomorrow?Are we still on for tomorrow?Are we still on for tomorrow?Are we still on for tomorrow?Are we still on for tomorrow?Are we still on for tomorrow?",
          time: "Yesterday",
        },
        {
          id: 2,
          sender: 2,
          text: "Yes, looking forward to it.",
          time: "Yesterday",
        },
        {
          id: 3,
          sender: 2,
          text: "Are we still on for tomorrow? Are we still on for tomorrow?Are we still on for tomorrow?Are we still on for tomorrow?Are we still on for tomorrow?Are we still on for tomorrow?Are we still on for tomorrow?Are we still on for tomorrow?Are we still on for tomorrow?",
          time: "Yesterday",
        },
        {
          id: 4,
          sender: 2,
          text: "Can you send me the files?",
          time: "2024-07-07",
        },
        { id: 5, sender: 1, text: "Sure, sending now.", time: "2024-07-07" },
        { id: 6, sender: 1, text: "What's the plan?", time: "09:25" },
        { id: 7, sender: 2, text: "Let's discuss over lunch.", time: "09:25" },
        { id: 8, sender: 1, text: "Let's discuss over lunch.", time: "09:25" },
        { id: 9, sender: 2, text: "Let's discuss over lunch.", time: "09:25" },
        { id: 10, sender: 1, text: "Let's discuss over lunch.", time: "09:25" },
      ],
    },
    {
      id: 9,
      name: "Ivy Green",
      image: "https://picsum.photos/id/1019/200/200",
      messages: [
        {
          id: 1,
          sender: 1,
          text: "Can you send me the files?",
          time: "2024-07-07",
        },
        { id: 2, sender: 2, text: "Sure, sending now.", time: "2024-07-07" },
      ],
    },
    {
      id: 10,
      name: "Jake Long",
      image: "https://picsum.photos/id/1020/200/200",
      messages: [
        { id: 1, sender: 1, text: "What's the plan?", time: "09:25" },
        { id: 2, sender: 2, text: "Let's discuss over lunch.", time: "09:25" },
      ],
    },
  ],
};

const chat = createSlice({
  name: "chat",
  initialState,
  reducers: {
    SET_SELECTED_CONVERSATION: (
      state,
      action
    ) => {
      state.selectedConversationID = action.payload.id;
      state.selctedConversation = action.payload.conversation;
    },
  },
});

export default chat.reducer;

export const { SET_SELECTED_CONVERSATION } = chat.actions;
