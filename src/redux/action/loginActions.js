import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserListSelector, getCurrentUserSelector } from '../../redux/slice/loginSlice';

/**
 * This action is used to login the user to the app
 * We maintain the list of user who login to the app
 * If user data is there in the user list we just login the user (Login)
 * Else we add the new user details to the users list and then allow them to login (Register)
 */
export const loginUserAction = createAsyncThunk(
  'loginSlice/loginUserAction',
  async (email, thunkAPI) => {
    try {
      // Construct new user object
      let user = {
        email,
        level: {},
        points: {},
        totalPoints: 0,
      };
      // Get user list 
      const userList = getUserListSelector(thunkAPI.getState());
      // Find the login user data
      const userIndex = userList.findIndex(user => user.email === email);
      if (userIndex === -1) {
        // Register flow
        const newUserList = [...userList, user];
        return thunkAPI.fulfillWithValue({ userList: newUserList, user });
      } else {
        // Login flow
        user = userList[userIndex];
        return thunkAPI.fulfillWithValue({ userList, user });
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  },
);

/**
 * This action is used to update game progress
 * This is invoked when user complete a level
 * The game level and points they score will be stored as their game progress
 * So that user can resume from where they left when the relogin
 */
export const updateGameLevelAction = createAsyncThunk(
  'loginSlice/updateGameLevelAction',
  async (payload, thunkAPI) => {
    try {
      const { categoryId, level, points } = payload;
      const userList = getUserListSelector(thunkAPI.getState());
      const newUserList = [...userList];
      const currentUser = getCurrentUserSelector(thunkAPI.getState());
      const userIndex = userList.findIndex(user => user.email === currentUser.email);
      const newUser = {...userList[userIndex]};
      const levelObj = {
        ...newUser.level,
        [categoryId]: level,
      };
      const pointObj = {
        ...newUser.points,
        [categoryId]: points,
      };
      newUser.level = levelObj;
      newUser.points = pointObj;
      newUser.totalPoints = Object.values(pointObj).reduce((total, num) => (total + num));
      newUserList[userIndex] = newUser;
      return thunkAPI.fulfillWithValue({ userList: newUserList, user: newUser });
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  },
);
