import { createSlice } from "@reduxjs/toolkit";

const initialRooms = { rooms: [] };

const rooms = createSlice({
  name: "room",
  initialState: initialRooms,
  reducers: {
    getMoreRooms(state, action) {
      const rooms = action.payload;
      const join = state.rooms.concat(rooms);
      state.rooms = join;
    },
  },
});

const roomsReducer = rooms.reducer;

export const roomsActions = rooms.actions;
export default roomsReducer;
