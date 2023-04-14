import React,{useState} from 'react'
import { CustomButton,TextInput } from "../../UI-Components/";
import { Grid } from "@mui/material";
const BookingForm = ({ handler,state,onUpdate,onDelete,newpage,onClick ,formErrors,closebutton}) => {
  return (
  <Grid container rowSpacing={2} columnSpacing={1} columns={{ xs: 6, md: 12 }}>
    <Grid item xs={2}>
      <TextInput
        fullWidth
        required
        label={"Customer Id"}
        size="small"
        change={handler}
        value={state.CustomerId}
        error={formErrors.CustomerId?true:false}
        helper={formErrors.CustomerId}
        name="CustomerId"
        type="text"
        variant="outlined"
      />
    </Grid>
    <Grid item xs={4}>
      <TextInput
        fullWidth
        required
        size="small"
        change={handler}
        label={"Customer Name"}
        value={state.CustomerName}
        error={formErrors.CustomerName?true:false}
        helper={formErrors.CustomerName}
        name="CustomerName"
        type="text"
        variant="outlined"
      />
    </Grid>
    <Grid item xs={6}>
      <TextInput
        fullWidth
        required
        size="small"
        change={handler}
        label={"Address"}
        error={formErrors.CustomerAddress?true:false}
        helper={formErrors.CustomerAddress}
        value={state.CustomerAddress}
        name="CustomerAddress"
        type="text"
        variant="outlined"
      />
    </Grid>
    <Grid item xs={2}>
      <TextInput
        fullWidth
        required
        size="small"
        change={handler}
        label={"Phone No"}
        value={state.CustomerPhoneNo}
        error={formErrors.CustomerPhoneNo?true:false}
        helper={formErrors.CustomerPhoneNo}
        name="CustomerPhoneNo"
        type="text"
        variant="outlined"
      />
    </Grid>
    <Grid item xs={4}>
      <TextInput
        fullWidth
        required
        size="small"
        change={handler}
        label={"Destination"}
        value={state.Destination}
        error={formErrors.Destination?true:false}
        helper={formErrors.Destination}
        name="Destination"
        type="text"
        variant="outlined"
      />
    </Grid>
    <Grid item xs={3}>
      <TextInput
        fullWidth
        required
        size="small"
        label={"Start Date"}
        change={handler}
        error={formErrors.StartDate?true:false}
        helper={formErrors.StartDate}
        value={state.StartDate}
        name="StartDate"
        type="text"
        variant="outlined"
      />
    </Grid>
    <Grid item xs={3}>
      <TextInput
        fullWidth
        required
        size="small"
        change={handler}
        label={"End Date"}
        value={state.EndDate}
        error={formErrors.EndDate?true:false}
        helper={formErrors.EndDate}
        name="EndDate"
        type="text"
        variant="outlined"
      />
    </Grid>
   {!newpage?<>
    <Grid item xs={4}>
    <CustomButton  
        variant="contained"
        text="Delete"
        size="large"
        fullWidth
        onClick={onDelete}
        />
        </Grid>
        <Grid item xs={4}>
        <CustomButton  
        variant="contained"
        text="Update"
        size="large"
        fullWidth
        onClick={onUpdate}
        />
        </Grid>
        <Grid item xs={4}> 
        <CustomButton  
        variant="contained"
        text="Close"
        size="large"
        fullWidth
        onClick={closebutton}
        /></Grid>
   </> 
    :<Grid item xs={12}>
     <CustomButton  
        variant="contained"
        text="Book"
        size="large"
        fullWidth
        onClick={onClick}
        /></Grid>}
    </Grid>
 
  )
}
export default BookingForm;