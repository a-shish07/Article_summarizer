import { configureStore } from "@reduxjs/toolkit";

import { articleApi } from './article';

// A Store is a global state that saves the entire information of our application 
export const store = configureStore({
    // Reducer are used to take a slice of data from the whole store 
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleApi.middleware)
});