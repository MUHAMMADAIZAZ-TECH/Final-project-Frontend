import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GetBookings,NewBooking,DeleteBooking,UpdateBooking } from "../../travel.apis";

const initialState = {
  message:null,
  loading: false,
  bookingList: null,
  error: null,
};
const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    resetuserstates: (state) => (state = initialState),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getbookings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getbookings.fulfilled, (state, action) => {
        state.loading = false;
        state.bookingList = action.payload;
        state.message = action.payload.message;
      })
      .addCase(getbookings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
      builder
      .addCase(newbooking.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(newbooking.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(newbooking.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
      builder
      .addCase(deletebooking.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deletebooking.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(deletebooking.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
      builder
      .addCase(updatebooking.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updatebooking.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(updatebooking.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const getbookings = createAsyncThunk(
  "user/getbookings",
  async (Provider) => {
    const response = await GetBookings(Provider);
    return response.data;
  }
);
export const newbooking = createAsyncThunk(
  "user/newbooking",
  async (state) => {
    const response = await NewBooking(state);
    return response.data;
  }
);
export const deletebooking = createAsyncThunk(
  "user/deletebooking",
  async (BookingId) => {
    const response = await DeleteBooking(BookingId);
    return response.data;
  }
);
export const updatebooking = createAsyncThunk(
  "user/updatebooking",
  async (state) => {
    const response = await UpdateBooking(state);
    return response.data;
  }
);

export const { resetuserstates } = userSlice.actions;
export default userSlice.reducer;
