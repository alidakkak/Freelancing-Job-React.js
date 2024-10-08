import { configureStore } from "@reduxjs/toolkit";
import chat from "./slices/chatSlice";

const store = configureStore({
    reducer : {
        chat : chat
    }
})

export default store