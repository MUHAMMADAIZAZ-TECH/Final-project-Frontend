import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GetBookings,NewBooking,DeleteBooking,UpdateBooking } from "../../travel.apis";

const initialState = {
  message:null,
  loading: false,
  bookingList: [],
  error: null,
  isSuccess: false,
  open: false
};
const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    resetuserstates: (state) => (state = initialState),
    resetMessage: (state) => {
      state.open = false;
      state.message = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getbookings.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.isSuccess = false;
      })
      .addCase(getbookings.fulfilled, (state, action) => {
        state.loading = false;
        state.bookingList = action.payload.Bookings;
        state.isSuccess = false;
      })
      .addCase(getbookings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.isSuccess = false;
      });
      builder
      .addCase(newbooking.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.isSuccess = false;
      })
      .addCase(newbooking.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
        state.isSuccess = true;
        state.open = true;
      })
      .addCase(newbooking.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.isSuccess = false;
      });
      builder
      .addCase(deletebooking.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.isSuccess = false;
      })
      .addCase(deletebooking.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
        state.bookingList = action.payload.UpdatedList;
        state.isSuccess = true;
        state.open = true;
      })
      .addCase(deletebooking.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.isSuccess = false;
      });
      builder
      .addCase(updatebooking.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.isSuccess = false;
      })
      .addCase(updatebooking.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
        state.bookingList = action.payload.UpdatedList;
        state.isSuccess = true;
        state.open = true;
      })
      .addCase(updatebooking.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.isSuccess = false;
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

export const { resetuserstates,resetMessage } = userSlice.actions;
export default userSlice.reducer;
