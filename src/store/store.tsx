import { configureStore } from "@reduxjs/toolkit";
import appSliceReducer from "../Slices/appSlice"
export const store = configureStore({
    reducer: {
        sidebarOpen: appSliceReducer
    }
})
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;