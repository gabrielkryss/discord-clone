import { createSlice } from '@reduxjs/toolkit';

interface UserState {
	channelID: any;
	channelName: any;
}

const initialState: UserState = {
	channelID: null,
	channelName: null,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setChannelInfo: (state: any, action: any) => {
      state.channelId = action.payload.channelId;
      state.channelName = action.payload.channelName;
    },
  },
});

export const { setChannelInfo } = appSlice.actions;

export const selectChannelId = (state: any) => state.app.channelId;
export const selectChannelName = (state: any) => state.app.channelName;

export default appSlice.reducer;
