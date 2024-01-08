import React, { useContext, useState } from "react";
import styles from "./Checkout.module.css";
import { useFormik } from "formik";
import shipping from "../../images/Elements/Cart/shipping.png";
import * as Yup from "yup";
// import axios from "axios";
import { CartContext } from "../../context/cartContext";

export default function Checkout() {
  // const [isLoading, setIsLoading] = useState(false);
  // const [apiError, setApiError] = useState("");

  // use context
  let { onlinePayment, getCart, setCartId,clearCartLocalStorage } = useContext(CartContext);

  let validationSchema = Yup.object({
    name: Yup.string()
      .max(15, "name should be less than 15")
      .required("name is required"),
    phone: Yup.string()
      .matches(/^01[0125][0-9]{8}$/, "phone is invalid")
      .required("phone is required"),
    city: Yup.string()
      .max(15, "city should be valid ")
      .required("city is required"),
  });

  let formik = useFormik({
    initialValues: {
      // details: "",
      name: "",
      phone: "",
      city: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => payNow(values),
  });

  async function payNow(values) {
    try {
      let { data } = await onlinePayment(values);
      console.log(data);
      window.location.href = data.session.url;
  
    } catch (error) {
      // console.error("Error processing payment:", error);
  
      // Clear cart-related data from localStorage on error
      clearCartLocalStorage();
    }
  }

  return (
    <>
      <div className={`${styles.container} container`}>
        <h2 className={`${styles.header} text-center`}>Checkout</h2>
        <div className={styles.shippingCar}>
          <p>
            Shop for 2000 EGP more to enjoy
            <span className="fw-bolder ms-1 ">FREE Shipping</span>
          </p>
          <img
            src={shipping}
            alt="shipping processing"
            className={`w-25 mb-3`}
          />
        </div>
        <h6 className={`w-75 ${styles.subHeader}`}>Contact infromation</h6>
        {/* shipping form details */}
        <form className="w-75 m-auto" onSubmit={formik.handleSubmit}>
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
              <div className="alert alert-info">{formik.errors.phone}</div>
            ) : (
              ""
            )}
          </div>

          {/* City input */}
          <div className="form-group mb-4">
            <label htmlFor="city">City</label>
            <input
              type="text"
              className="form-control my-2"
              id="city"
              name="city"
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.city && formik.touched.city ? (
              <div className="alert alert-info">{formik.errors.city}</div>
            ) : (
              ""
            )}
          </div>

          <button className={`btn ${styles.payBtn} mb-5`} type="submit">
            Pay Now
          </button>
        </form>
      </div>
    </>
  );
}
