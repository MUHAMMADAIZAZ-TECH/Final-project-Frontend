import React, { useState, useEffect } from "react";
import {
  EditModal,
  BookingForm,
  Table,
} from "../../UI-Components/";
import {
  getbookings,
  deletebooking,
  updatebooking
} from "../../../Store/Slicers/TravelSlice/TravelSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  CssBaseline,
  Box,
  Grid,
  Typography,
} from "@mui/material";
export const Home = () => {
  const dispatch = useDispatch();
  const reduxstate = useSelector((state) => state.user);
  const user = JSON.parse(localStorage.getItem("user"));
  const [open, setOpen] = React.useState(false);
  const handleOpen = (Item) => {
    const { __v,...rest} = Item;
    setstate(rest);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const handler = (e) => {
    setstate({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const [state, setstate] = useState({
    CustomerId: "",
    CustomerName: "",
    CustomerAddress: "",
    CustomerPhoneNo: "",
    Destination: "",
    StartDate: "",
    EndDate: "",
  });

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 1200,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 6,
  };
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
  const Update = () => {
    if (validateForm()) {
      dispatch(updatebooking(state))
    }
  };
  const Delete = () => {
    if (validateForm()) {
      dispatch(deletebooking(state.BookingId))
    }
  };
  const content = (
    <Box sx={style}>
      <Grid item xs={12}>
        <div style={{ padding: 20 }}>
          <Typography variant="h5">Edit Details</Typography>
        </div>
      </Grid>
      <BookingForm
        handler={handler}
        state={state}
        onUpdate={() => Update()}
        onDelete={() => Delete()}
        formErrors={formErrors}
        closebutton={handleClose}
      />
    </Box>
  );
  useEffect(() => {
    dispatch(getbookings(user.Provider));
  }, []);
  useEffect(()=>{
    if(reduxstate.isSuccess){
      handleClose()
    }
  },[reduxstate.isSuccess])
  return (
    <React.Fragment>
      <CssBaseline />
      <Box sx={{ height: "80vh" }}>
        <Grid
          container
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          columns={{ xs: 6, md: 12 }}
        >
          <Grid item xs={12}>
            <div
              style={{
                padding: 20,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h5">Bookings</Typography>
            </div>
          </Grid>
        </Grid>
        <Grid container rowSpacing={2} columns={{ xs: 6, md: 12 }}>
          <Table rows={reduxstate?.bookingList?.Bookings} reduxstate={reduxstate} onRowClick={(item) => handleOpen(item.row)}/>
        </Grid>
        <EditModal open={open} handleClose={handleClose} content={content} />
      </Box>
    </React.Fragment>
  );
};
export default Home;
