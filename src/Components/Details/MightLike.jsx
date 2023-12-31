import React, { useEffect, useState } from "react";
import styles from "./MightLike.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { LineWave } from "react-loader-spinner";
import { useQuery } from "react-query";

export default function MightLike() {
  // use state
  const [startIndex, setStartIndex] = useState(0);

  // refresh page
  function refreshPage() {
    setTimeout(() => {
      window.location.reload(false);
    }, 500);
  }

  // USING USEQUERY
  const { data: allProducts, isLoading } = useQuery("MightLike", () =>
    axios
      .get("https://ecommerce.routemisr.com/api/v1/products")
      .then((response) => response.data?.data || [])
  );

  const products = allProducts?.slice(startIndex, startIndex + 4) || [];

  function prevProducts() {
    if (startIndex >= 4) {
      setStartIndex(startIndex - 4);
    }
  }

  function nextProducts() {
    if (startIndex + 4 < allProducts.length) {
      setStartIndex(startIndex + 4);
    }
  }

  return (
    <>
      <div className={`row mx-auto ${styles.mightLike}`}>
        <div className="">
          <div className="d-flex justify-content-between">
            <h5 className="ms-3">You might also like</h5>
            <div className={`${styles.arrows} ms-auto`}>
              <i
                className={`fa-solid fa-arrow-left me-4 ${styles.btn}`}
                onClick={prevProducts}
              ></i>
              <i
                className={`fa-solid fa-arrow-right ${styles.btn}`}
                onClick={nextProducts}
              ></i>
            </div>
          </div>

          <>
            {isLoading ? (
              <LineWave
                height="100"
                width="100"
                color="#f15d76"
                ariaLabel="line-wave"
                wrapperStyle={{}}
                wrapperClass={
                  "justify-content-center  align-items-center mt-4 pt-4"
                }
                visible={true}
                firstLineColor=""
                middleLineColor=""
                lastLineColor=""
              />
            ) : (
              <div className="d-flex ">
                {products.map((ele) => (
                  <div className={`col-md-3  ${styles.products}`} key={ele.id}>
                    <div className={`${styles.product} mt-3`}>
                      <Link
                        to={`/details/${ele.id}`}
                        className="link"
                        onClick={refreshPage}
                      >
                        <img
                          src={ele.imageCover}
                          className={`img-fluid`}
                          alt=""
                        />
                        <h3 className={`p text-center`}>
                          {ele.title.split(" ").slice(0, 3).join(" ")}
                        </h3>
                        <div className="d-flex align-items-center justify-content-center">
                          {ele.priceAfterDiscount && (
                            <p className={`${styles.afterDiscount} ms-3`}>
                              {ele.priceAfterDiscount} EGP
                            </p>
                          )}
                          {ele.priceAfterDiscount ? (
                            <p className={`${styles.oldPrice} ms-3`}>
                              {ele.price} EGP
                            </p>
                          ) : (
                            <p className={`${styles.price} ms-3`}>
                              {ele.price} EGP
                            </p>
                          )}
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        </div>
      </div>
    </>
  );
}
