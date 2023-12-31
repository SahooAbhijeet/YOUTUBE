import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen: true,
        videos: [],
        nextPageToken: null,
        searchTerm: "",
        currentPlaying: null,
        searchResults: [],
        recommendedVideo: []
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu: (state) => {
            state.isMenuOpen = true;
        },
        clearVideos: (state) => {
            state.videos = [];
            state.nextPageToken = null;
        }
    },
})
export const { toggleMenu, closeMenu, clearVideos } = appSlice.actions;
export default appSlice.reducer;