import React, { useEffect, useState } from "react";
import styles from "./Details.module.css";
import { useParams } from "react-router";
import axios from "axios";
import { LineWave } from "react-loader-spinner";
import Slider from "react-slick";

export default function Details() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true
  };
  const [isLoading, setIsLoading] = useState(true);
  const [details, setDetails] = useState([]);

  useEffect(() => {
    getDetails(params.id);
  }, []);

  let params = useParams();

  async function getDetails(id) {
    let { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/products/${id}`
    );
    setDetails(data?.data);
    setIsLoading(false);
  }


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
            <div className="row align-items-center">
              <div className="col-md-4">
                <Slider {...settings}>
                 {details.images.map((ele , index)=><img key={index} src={ele} className="w-100" alt="" />)}
                </Slider>
              </div>
              <div className="col-md-8">
                <h2 className="pb-3">{details.title}</h2>
                <p className="pb-1">{details.description}</p>
                <p className="pb-3">{details.category.name}</p>
                <div className="d-flex justify-content-between pb-2">
                  <h5>{details.price} EGP</h5>
                  <h5>
                    {details.ratingsAverage}
                    <i className="fa fa-star text-warning ms-2"></i>
                  </h5>
                </div>
                <button className="cart-btn w-100 ">Add To Cart</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

//  <img src={details.imageCover} className="w-100 " alt="" />
