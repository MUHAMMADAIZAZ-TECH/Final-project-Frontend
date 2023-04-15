import axios from "axios";
axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.withCredentials = true;
const User = JSON.parse(localStorage.getItem("user"))
  export const GetBookings = async () => {
    const response = await axios.post(`/travelManagement/getbookings`,{ Provider: User.Provider });
    return response;
  };
  export const NewBooking = async ( state ) => {
    const response = await axios.post(`/travelManagement/newbooking`,{ Provider: User.Provider,state:state });
    return response;
  };
  export const DeleteBooking = async ( BookingId ) => {
    const response = await axios.post(`/travelManagement/deletebooking`,{ Provider: User.Provider,BookingId: BookingId });
    return response;
  };
  export const UpdateBooking = async ( state ) => {
    const response = await axios.post(`/travelManagement/updatebooking`,{ Provider: User.Provider,state:state });
    return response;
  };