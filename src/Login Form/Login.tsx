import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import LoginImg from "../assets/Images/Login Image.png";
import { LoginStyles } from "./LoginStyles";
import { useFormik } from "formik";
import { LoginSchema } from "../schema/schema";

interface formValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

function Login() {
  const initialValues: formValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const { values, errors,touched, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    onSubmit: (values,action) => {
      console.log(values); // Get form data
      action.resetForm(); // Reset Form on Submit
    },
  });
  // console.log("errors", errors);

  return (
    <Box sx={LoginStyles.mainContainer}>
      <Box sx={LoginStyles.formHeadingContainer}>
        <Typography>Welcome!</Typography>
        <form onSubmit={handleSubmit}>
          <Box sx={LoginStyles.formContainer}>
            <TextField
              id="name"
              name="name"
              variant="outlined"
              label="Name"
              type="text"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={errors.name && touched.name ? errors.name : "" }
              error={errors.name && touched.name ? true : false}
            />
            <TextField
              variant="outlined"
              id="email"
              name="email"
              label="Email"
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={errors.email && touched.email ? errors.email : "" }
              error={errors.email && touched.email ? true : false}
            />
            <TextField
              variant="outlined"
              id="password"
              name="password"
              label="Password"
              type="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={errors.password && touched.password ? errors.password : "" }
              error={errors.password  && touched.password ? true : false}
            />
            <TextField
              variant="outlined"
              id="confirmPassword"
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={errors.confirmPassword  && touched.confirmPassword ? errors.confirmPassword : ""}
              error={errors.confirmPassword  && touched.confirmPassword ? true : false}
            />
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Box>
        </form>
      </Box>

      <Box>
        <img src={LoginImg} alt="" />
      </Box>
    </Box>
  );
}

export default Login;

// Step 1: Get Form Data..
