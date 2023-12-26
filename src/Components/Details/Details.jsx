import React, { useEffect, useState } from "react";
import styles from "./Details.module.css";
import { useParams } from "react-router";
import axios from "axios";
import { LineWave } from "react-loader-spinner";
import Slider from "react-slick";
import MightLike from "../Details/MightLike";

// main function component
export default function Details() {
  // use state
  const [isLoading, setIsLoading] = useState(true);
  const [details, setDetails] = useState([]);

  // setting for slick slider
  const settings = {
    customPaging: function (i) {
      return <img src={details.images[i]} />;
    },
    arrows: false,
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
  };

  // use params
  let params = useParams();

  // use effect functions
  useEffect(() => {
    getDetails(params.id);
  }, [params.id]);

  // get details for spacific product with id
  async function getDetails(id) {
    let { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/products/${id}`
    );
    setDetails(data?.data);
    setIsLoading(false);
  }

  // rendering the component
  return (
    <>
      <div className={styles.marginTop}>
        <div className="container">
          {isLoading ? (
            <LineWave
              height="100"
              width="100"
              color="#f15d76"
              ariaLabel="line-wave"
              wrapperStyle={{}}
              wrapperClass={
                "justify-content-center  align-items-center mt-5 pt-5"
              }
              visible={true}
              firstLineColor=""
              middleLineColor=""
              lastLineColor=""
            />
          ) : (
            <>
              {/* details of product */}
              <div className="row justify-content-center">
                {/* left side to show product images */}
                <div className="col-md-4 ms-4">
                  <Slider {...settings}>
                    {details.images.map((ele, index) => (
                      <img key={index} src={ele} className="img-fluid" alt="" />
                    ))}
                  </Slider>
                </div>

                {/* right side to show details of product */}
                <div className="col-md-6 ms-5">
                  <h2 className="pb-3 h4">{details.title}</h2>
                  <p className={`${styles.desc}`}>{details.description}</p>
                  <p className={`${styles.desc}`}>{details.category.name}</p>

                  <h5>
                    <i className={`fa fa-star ${styles.star}`}></i>
                    <i className={`fa fa-star ${styles.star}`}></i>
                    <i className={`fa fa-star ${styles.star}`}></i>
                    <i className={`fa fa-star ${styles.star}`}></i>
                    <i
                      class={`fa-solid fa-star-half-stroke me-2 ${styles.star}`}
                    ></i>
                    <span
                      className={styles.reviews}
                    >{`${details.ratingsQuantity} Reviews`}</span>
                  </h5>

                  <div className={`py-2 ${styles.underline}`}>
                    <div className="d-flex align-items-center">
                      {details.priceAfterDiscount && (
                        <p className={`${styles.afterDiscount}`}>
                          {details.priceAfterDiscount} EGP
                        </p>
                      )}
                      {details.priceAfterDiscount ? (
                        <p className={`${styles.oldPrice} ms-3`}>
                          {details.price} EGP
                        </p>
                      ) : (
                        <p className={`${styles.price} ms-3`}>
                          {details.price} EGP
                        </p>
                      )}
                    </div>
                    <p className="my-3">
                      <i class="fa-regular fa-eye"></i> {details.sold} people
                      are looking at this product
                    </p>
                  </div>

                  <div className={`${styles.quantity} mt-4`}>
                    <input
                      type="button"
                      value="-"
                      className={styles.decrease}
                    />
                    <input type="text" value="1" className="w-100" />
                    <input
                      type="button"
                      value="+"
                      className={styles.increase}
                    />
                  </div>
                  <button className={` w-100 ${styles.cartbtn} `}>
                    Add To Cart
                  </button>

                  <p className={`d-inline ms-2 me-5 ${styles.fav}`}>
                    <i class="fa-regular fa-heart"></i> Wishlist
                  </p>

                  <p className={`d-inline ${styles.fav}`}>
                    <i class="fa-solid fa-share-nodes"></i> Share
                  </p>
                </div>
              </div>

              {/* table of general information */}
              <div className={`row mx-auto ${styles.table}`}>
                <div className="col-md-2">
                  <p className={styles.desc}>Description</p>
                  <p>Size</p>
                  <p>Color</p>
                  <p>Weight</p>
                </div>
                <div className="col-md-3">
                  <p>Additional Info</p>
                  <p className={styles.desc}>XSS, XS, S, M, L, XL, 2XL, 3XL</p>
                  <p className={styles.desc}>Red, Green, Blue</p>
                  <p className={styles.desc}>1.5lb, 0.68Kg</p>
                </div>
                <div className="col-md-3">
                  <p className={styles.desc}>Reviews</p>
                </div>
              </div>

              {/* might like products */}
              {<MightLike />}
            </>
          )}
        </div>
      </div>
    </>
  );
}
