import React, { useState } from "react";
import styles from "./Register.module.css";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import heroImg from "../../images/Elements/register_img.png"


export default function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  let navigate = useNavigate();

  let validationSchema = Yup.object({
    name: Yup.string()
      .max(15, "name should be less than 15")
      .required("name is required"),
    email: Yup.string().email("emai not valid").required("email is required"),
    password: Yup.string()
      .matches(/^[A-Z][a-z0-9]{5,8}$/, "password should start with capital")
      .required("password is required"),
    rePassword: Yup.string()
      .oneOf([Yup.ref("password")], "re-password should match password ")
      .required("password is required"),
    phone: Yup.string()
      .matches(/^01[0125][0-9]{8}$/, "phone is invalid")
      .required("phone is required"),
  });

  async function register(values) {
    setApiError("");
    setIsLoading(true);
    console.log(values);
    let { data } = await axios
      .post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, values)
      .catch((err) => {
        setIsLoading(false);
        setApiError(err.response.data.message);
      });
    console.log(data);
    if (data.message == "success") {
      setIsLoading(false);
      navigate("/login");
    }
  }

  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => register(values),
  });

  return (
    <>
      <div className="row m-0">
        <div className="col-md-6 p-0">
          <div className={styles.hero}>
            <img src={heroImg} alt="hero_image" className={styles.heroImg} />
          </div>
        </div>
        <div className="col-md-6">
          <div className={styles.right}>

            <h2 className="mb-3">Sign up</h2>
            <p className="mb-4">
              Aleady have an account?
              <Link className="link" to="/login">
                Login
              </Link>
            </p>
            {apiError && <p className="alert alert-danger">{apiError}</p>}
            <form className="w-75 " onSubmit={formik.handleSubmit}>
              {/* name input */}
              <div className="form-group mb-2">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control my-2"
                  id="name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                {formik.errors.name && formik.touched.name ? (
                  <div className="alert">{formik.errors.name}</div>
                ) : (
                  ""
                )}
              </div>

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
                  <div className="alert">{formik.errors.email}</div>
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
                  <div className="alert">{formik.errors.password}</div>
                ) : (
                  ""
                )}
              </div>

              {/* rePassword input */}
              <div className="form-group mb-2">
                <label htmlFor="rePassword">Re-Password</label>
                <input
                  type="password"
                  className="form-control my-2"
                  id="rePassword"
                  name="rePassword"
                  value={formik.values.rePassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                {formik.errors.rePassword && formik.touched.rePassword ? (
                  <div className="alert">{formik.errors.rePassword}</div>
                ) : (
                  ""
                )}
              </div>

              {/* Phone input */}
              <div className="form-group mb-4">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  className="form-control my-2"
                  id="phone"
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.phone && formik.touched.phone ? (
                  <div className="alert">{formik.errors.phone}</div>
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
                  Register
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
