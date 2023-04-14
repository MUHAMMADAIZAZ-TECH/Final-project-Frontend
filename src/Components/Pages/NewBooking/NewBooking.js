import React, { useEffect, useState } from "react";
import { BookingForm } from "../../UI-Components/";
import { newbooking } from "../../../Store/Slicers/TravelSlice/TravelSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  CssBaseline,
  Box,
  Grid,
  Typography,
} from "@mui/material";
export const NewBooking = () => {
  const dispatch = useDispatch();
  const [state,setstate] = useState({
    CustomerId:"",
    CustomerName:"",
    CustomerAddress:"",
    CustomerPhoneNo:"",
    Destination:"",
    StartDate:"",
    EndDate:""
  })
  const ReduxState = useSelector((state) => state.user);
  const handler = (e) =>{
    setstate({
        ...state,[e.target.name] : e.target.value
    })
  }
  const user = JSON.parse(localStorage.getItem("user"));
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    Object.keys(state).forEach((key) => {
      if (!state[key]) {
        errors[key] = `This Field is required`;
      }
    });
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const handleSubmit = () => {
    if (validateForm()) {
      dispatch(newbooking(state))
    }
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <Box sx={{ height: "80vh" }}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} columns={{ xs: 6, md: 12 }}>
          <Grid item xs={12}>
            <div style={{ padding: 20}}>
              <Typography variant="h5">New Booking</Typography>
            </div>
          </Grid>
        </Grid>
      <BookingForm handler={handler} state={state} onClick={()=>handleSubmit()} newpage formErrors={formErrors}/>
      </Box>
    </React.Fragment>
  );
};
export default NewBooking;
