import React, { useEffect ,useState } from "react";
import Auth, {
  SignIn,
  SignUp,
  EmailVerified,
  ForgotPassword,
  PasswordReset,
} from "./Components/Authentication/Auth";
import UserDashboard from "./Components/Dashboard/UserDashboard";
import { CustomSnackbar } from "./Components/UI-Components/";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import { Home, NotFoundPage, ConnectionLost, NewBooking } from "./Components/Pages";
import { authenticateUser } from "./Store/Slicers/Authentication/AuthenticationSlice";
import { useDispatch, useSelector } from "react-redux";
function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.auth);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const { User } = state;
  const getUser = () => {
    fetch("http://localhost:5000/auth/login/success", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    })
      .then((response) => {
        if (response.status === 200) return response.json();
        throw new Error("authentication has been failed!");
      })
      .then((resObject) => {
        console.log(resObject)
        dispatch(authenticateUser(resObject));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    if(!User.Provider && User.Provider !=="normal"){
      getUser()
    }
  }, []);
  useEffect(() => {
    if (state.isAuthenticated === true) {
      navigate("/Dashboard");
    }
  }, [state.isAuthenticated]);
  useEffect(() => {
    window.addEventListener("offline", () => setIsOnline(false));
    window.addEventListener("online", () => setIsOnline(true));

    return () => {
      window.removeEventListener("offline", () => setIsOnline(false));
      window.removeEventListener("online", () => setIsOnline(true));
    };
  }, []);
  return (
    <React.Fragment>
      {isOnline? 
      <Routes>
        <Route path="/" element={<Auth />}>
          <Route index element={<SignIn />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path=":id/verify/:token" element={<EmailVerified />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/password-reset/:id/:token" element={<PasswordReset />}
          />
        </Route>
        <Route path="/Dashboard" element={state.isAuthenticated === true || document.cookie ? (<UserDashboard />) : (<Navigate replace to="/SignIn" />)}>
          <Route index element={<Home />} />
          <Route path="/Dashboard/Bookings" element={<Home />} />
          <Route path="/Dashboard/NewBooking" element={<NewBooking />} />
        </Route>
        <Route path="*" index element={<NotFoundPage />} />
      </Routes>: <ConnectionLost/>}
      <CustomSnackbar />
    </React.Fragment>
  );
}

export default App;
