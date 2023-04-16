import React, {  useState ,useEffect} from "react";
import { BookingForm } from "../../UI-Components/";
import { newbooking } from "../../../Store/Slicers/TravelSlice/TravelSlice";
import { useDispatch , useSelector} from "react-redux";
import {
  CssBaseline,
  Box,
  Grid,
  Typography,
} from "@mui/material";
export const NewBooking = () => {
  const dispatch = useDispatch();
  const reduxstate = useSelector((state) => state.user);
  const [state,setstate] = useState({
    CustomerId:"",
    CustomerName:"",
    CustomerAddress:"",
    CustomerPhoneNo:"",
    Destination:"",
    StartDate:"",
    EndDate:""
  })
  const handler = (e) =>{
    setstate({
        ...state,[e.target.name] : e.target.value
    })
  }
  const StateDateHandler = (date) => setstate({...state,StartDate : date.format('DD-MM-YYYY')});
  const EndDateHandler = (date) => setstate({...state,EndDate : date.format('DD-MM-YYYY')})
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
  useEffect(()=>{
    if(reduxstate.isSuccess){
      setstate({
        CustomerId:"",
        CustomerName:"",
        CustomerAddress:"",
        CustomerPhoneNo:"",
        Destination:"",
        StartDate:"",
        EndDate:""
      })
    }
  },[reduxstate.isSuccess])
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
      <BookingForm handler={handler} state={state} onClick={()=>handleSubmit()} newpage formErrors={formErrors} 
      StateDateHandler={StateDateHandler} EndDateHandler={EndDateHandler}/>
      </Box>
    </React.Fragment>
  );
};
export default NewBooking;
