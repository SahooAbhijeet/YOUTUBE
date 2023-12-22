import { configureStore } from '@reduxjs/toolkit'
import appSlice from './Slices/app-slice';
import chatSlice from './Slices/chat-slice';


const store = configureStore({
    reducer: {
        app: appSlice,
        chat: chatSlice
    },
});

export default store;
