import React, { useState } from "react";
import styles from "./AllProducts.module.css";
import axios from "axios";
import { LineWave } from "react-loader-spinner";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

// STARTING MAIN FUNCTION
export default function AllProducts() {
  // SHOW LIMITED ITEMS
  const [limit, setLimit] = useState(12);

  // GET DATA FROM API
  function getProduct() {
    return axios.get("https://ecommerce.routemisr.com/api/v1/products");
  }

  // USING USEQUERY
  let { data, isLoading } = useQuery("AllProducts", getProduct);

  // DISPLAY PRODUCTS FUNTION
  function displayProducts() {
    let allData = data?.data?.data.slice(0, limit);
    return allData.map((ele) => (
      <div className={`col-md-4 mb-5 px-4`} key={ele.id}>
        <div className={`${styles.product}`}>
          <Link to={"/details/" + ele.id} className="link">
            <img
              src={ele.imageCover}
              className={`${styles.cardImage} ${styles.productImg}`}
              alt=""
            />
            <h5 className="ms-3">
              <i className={`fa fa-star ${styles.star}`}></i>
              <i className={`fa fa-star ${styles.star}`}></i>
              <i className={`fa fa-star ${styles.star}`}></i>
              <i className={`fa fa-star ${styles.star}`}></i>
              <i class={`fa-solid fa-star-half-stroke me-2 ${styles.star}`}></i>
            </h5>

            <h3 className={`${styles.title} ms-3`}>
              {ele.title.split(" ").slice(0, 4).join(" ")}
            </h3>
            <div className="d-flex align-items-center">
              {ele.priceAfterDiscount && (
                <p className={`${styles.afterDiscount} ms-3`}>
                  {ele.priceAfterDiscount} EGP
                </p>
              )}
              {ele.priceAfterDiscount ? (
                <p className={`${styles.oldPrice} ms-3`}>{ele.price} EGP</p>
              ) : (
                <p className={`${styles.price} ms-3`}>{ele.price} EGP</p>
              )}
            </div>
          </Link>
        </div>
      </div>
    ));
  }

  // SHOW MORE ITEMS FUNCTION
  function showMore() {
    setLimit(limit + 6);
    displayProducts();
  }

  return (
    <>
      {/* LOADER AND DISPLAY PRODUCT */}
      {isLoading ? (
        <LineWave
          height="100"
          width="100"
          color="#f15d76"
          ariaLabel="line-wave"
          wrapperStyle={{}}
          wrapperClass={"justify-content-center  align-items-center mt-5 pt-5"}
          visible={true}
          firstLineColor=""
          middleLineColor=""
          lastLineColor=""
        />
      ) : (
        <>
          {/* LOADING THEN DISPLAY PRODUCTS */}
          <div className={`row ${styles.rows} px-5`}>
            <> {displayProducts()}</>

            <div className={`my-2 pb-5 position-relative`}>
              <button
                className={`btn btn-black ${styles.btnMore}`}
                onClick={showMore}
                disabled={limit >= 40}
              >
                Show more
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
