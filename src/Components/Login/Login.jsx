import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import styles from "./Login.module.css";
import { tokenContext } from "../../context/tokenContext";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  let { setToken } = useContext(tokenContext);
  let navigate = useNavigate();

  let validationSchema = Yup.object({
    email: Yup.string().email("emai not valid").required("email is required"),
    password: Yup.string()
      .matches(/^[A-Z][a-z0-9]{5,8}$/, "password should start with capital")
      .required("password is required"),
  });

  // CALL API FUNCTION , SET LOADER AND NAVIGATE TO HOME PAGE
  async function login(values) {
    setApiError("");
    setIsLoading(true);
    console.log(values);
    let { data } = await axios
      .post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, values)
      .catch((err) => {
        setIsLoading(false);
        setApiError(err.response.data.message);
      });
    console.log(data);
    if (data.message == "success") {
      setIsLoading(false);
      localStorage.setItem('userToken',data.token)
      setToken(data.token)
      navigate("/");
    }
  }

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => login(values),
  });

  return (
    <>
      <div className="container my-2">
        <h2 className="pt-5 mb-3">Login Now</h2>
        <p className="p">
          Don't have an account yet?
          <Link className="link" to="/register">
            Register
          </Link>
        </p>
        {apiError && <p className="alert alert-danger">{apiError}</p>}
        <form className="w-75 mx-auto" onSubmit={formik.handleSubmit}>
          {/* email input */}
          <div className="form-group mb-2">
            <label htmlFor="uEmail">Email</label>
            <input
              type="email"
              className="form-control my-2"
              id="uEmail"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email ? (
              <div className="alert alert-info">{formik.errors.email}</div>
            ) : (
              ""
            )}
          </div>

          {/* password input */}
          <div className="form-group mb-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control my-2"
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.password && formik.touched.password ? (
              <div className="alert alert-info">{formik.errors.password}</div>
            ) : (
              ""
            )}
          </div>

          {isLoading ? (
            <button className="btn">
              <i className="fa fa-spin fa-spinner"></i>
            </button>
          ) : (
            <button
              disabled={!(formik.isValid && formik.dirty)}
              className="btn"
            >
              Login
            </button>
          )}
        </form>
      </div>
    </>
  );
}
