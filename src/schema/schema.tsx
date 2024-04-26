import * as Yup from "yup";

export const LoginSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Pls enter your email"),
  password: Yup.string().min(6).required("Pls enter your password"),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password")], "Password must match"),
});
