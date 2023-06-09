import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextInput, CustomButton } from "../../UI-Components/";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { GoogleLoginButton } from "react-social-login-buttons";
import { signin } from "../../../Store/Slicers/Authentication/AuthenticationSlice";
import { resetuserstates } from "../../../Store/Slicers/TravelSlice/TravelSlice";
const SignIn = () => {
  const validationSchema = Yup.object({
    Email: Yup.string()
      .email("Please enter valid email address")
      .required("Email is required"),
    Password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
  });
  const formik = useFormik({
    initialValues: {
      Email: "",
      Password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(signin({ state: values }));
    },
  });
  const dispatch = useDispatch();
  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };
  useEffect(() => {
    dispatch(resetuserstates());
  }, []);
  return (
    <React.Fragment>
      <h5 className="form-heading"> Log in to continue</h5>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
          <TextInput
            fullWidth
            size="small"
            name="Email"
            type="text"
            placeholder="Enter your email"
            value={formik.values.Email}
            change={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.Email && Boolean(formik.errors.Email)}
            helper={formik.touched.Email && formik.errors.Email}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextInput
            fullWidth
            size="small"
            name="Password"
            type="password"
            placeholder="Enter your password"
            value={formik.values.Password}
            change={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.Password && Boolean(formik.errors.Password)}
            helper={formik.touched.Password && formik.errors.Password}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <CustomButton
            variant="contained"
            text="Continue"
            size="large"
            fullWidth
            onClick={formik.handleSubmit}
          />
        </Grid>
        <Grid item xs={12} textAlign={"center"}>
          <span>or Continue with</span>
        </Grid>
        <Grid item xs={12}>
          <GoogleLoginButton align="center" size="40px" onClick={google}/>
        </Grid>
      </Grid>
      <div className="signup-text">
        <Link to="/ForgotPassword">Can't log in?</Link>
        <Link to="/SignUp">Doesn't have an account?</Link>
      </div>
      <div className="signup-text">
       Confluence, Trello and more.
        <br />
        Privacy Policy • User Notice
      </div>
    </React.Fragment>
  );
};

export default SignIn;
