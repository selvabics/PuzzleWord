import { createSlice } from '@reduxjs/toolkit';

import { loginUserAction, updateGameLevelAction } from '../../redux/action/loginActions';

const initialState = {
    isLoading: false,
    userList: [], // All the user list
    currentUser: {}, // Current logged in user details
};

// Case for handling login action
const buildLoginTokenSlices = (builder, actionAPI) => {
    builder.addCase(actionAPI.pending, state => {
        state.isLoading = true;
    });
    builder.addCase(actionAPI.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userList = action.payload.userList;
        state.currentUser = action.payload.user;
    });
    builder.addCase(actionAPI.rejected, (state, action) => {
        state.isLoading = false;
    });
};

const loginSlice = createSlice({
    name: 'loginSlice',
    initialState,
    reducers: {
        // Logout the user action
        logoutUserAction: state => {
            state.isLoading = false;
        },
    },
    extraReducers: builder => {
        buildLoginTokenSlices(builder, loginUserAction);
        builder.addCase(updateGameLevelAction.fulfilled, (state, action) => {
            state.currentUser = action.payload.user;
            state.userList = action.payload.userList;
          });
    },
});

export default loginSlice.reducer;

export const { logoutUserAction } = loginSlice.actions;

export const getLoginLoadingSelector = state => state.loginReducer.isLoading;

export const getUserListSelector = state => state.loginReducer.userList;

export const getCurrentUserSelector = state => state.loginReducer.currentUser;
