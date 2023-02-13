import { Share } from 'react-native';
import { createAsyncThunk } from '@reduxjs/toolkit';

/**
 * This action is used to share scored points to friends in social media
 */
export const shareInSocialMediaAction = createAsyncThunk(
    'loginSlice/shareInSocialMediaAction',
    async (message, thunkAPI) => {
        try {
            // Construct the message and Invoke share extension
            const result = await Share.share({
                title: 'Puzzle Word',
                message,
            });
            // We can handle the share message status
            if (result.action === Share.sharedAction) {
                return thunkAPI.fulfillWithValue(true);
            } else if (result.action === Share.dismissedAction) {
                return thunkAPI.fulfillWithValue(false);
            }
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    },
);
