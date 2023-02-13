import { configureStore } from '@reduxjs/toolkit';
import persistStore from 'redux-persist/es/persistStore';

import reducers from './slice';

// Config Redux store with reducers and middleware
export const store = configureStore({
    reducer: reducers,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    devTools: process.env.NODE_ENV !== 'production',
});

// Persist Redux store
// We need to persist the store since we do not use any API
// We persist all the user data and their game
export const persistor = persistStore(store);
