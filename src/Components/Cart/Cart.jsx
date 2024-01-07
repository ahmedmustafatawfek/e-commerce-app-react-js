import React, { useContext, useEffect, useState } from "react";
import styles from "./Cart.module.css";
import shipping from "../../images/Elements/Cart/shipping.png";
import { CartContext } from "../../context/cartContext";
import { LineWave } from "react-loader-spinner";
import { Link } from "react-router-dom";

export default function Cart() {
  // use state
  const [cartDetails, setCartDetails] = useState({});
  const [totalPrice, setTotalPrice] = useState();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // use context
  let { getCart, deleteProductFromCart, updateProductQuantity, setCartCount } =
    useContext(CartContext);

  async function getCartDetails() {
    let { data } = await getCart();
    setCartDetails(data);
    setProducts(data?.data.products);
    finalPrice();
    setIsLoading(false);
  }

  useEffect(() => {
    getCartDetails();
  }, []);

  // calculate final price to display
  async function finalPrice() {
    let { data } = await getCart();
    setTotalPrice(data?.data?.totalCartPrice);
  }

  // free shipping option
  function freeShipping() {
    setTotalPrice(cartDetails.data?.totalCartPrice);
  }

  // express shipping option
  function expressShipping() {
    let total = cartDetails.data?.totalCartPrice + 50;
    setTotalPrice(total);
  }

  // delete product from cart
  async function deleteItem(id) {
    setIsLoading(true);
    let { data } = await deleteProductFromCart(id);
    setCartDetails(data);
    finalPrice();
    setProducts(data?.data.products);
    setIsLoading(false);

    // Update cartCount in localStorage
    const updatedCartCount = data?.data.products.length;
    setCartCount(updatedCartCount);
    localStorage.setItem("cartCount", updatedCartCount.toString());
  }

  // update product quantity
  async function updateItemQuantity(id, quantity) {
    let { data } = await updateProductQuantity(id, quantity);
    data.data.products.map(
      (ele) => ele.count === 0 && deleteItem(ele.product._id)
    );
    setCartDetails(data);
    finalPrice();
    setProducts(data?.data.products);
  }

  // render main function cart()
  return (
    <div>
      <div className={`text-center ${styles.hero} mb-5`}>
        <h1 className="mb-5">cart</h1>
        <p>
          Shop for 2000 EGP more to enjoy
          <span className="fw-bolder ms-1">FREE Shipping</span>
        </p>
        <img src={shipping} alt="shipping processing" className="w-25 mb-3" />
      </div>

      <div className={`${styles.cartTable} container`}>
        {/* row of content  */}
        {/* head of cart table */}
        <div className={`row ${styles.row}`}>
          <div className="col-md-6 d-flex">
            <p className="me-auto">product</p>
          </div>
          <div className="col-md-2 d-flex">
            <p className="">Quantity</p>
          </div>
          <div className="col-md-2 d-flex">
            <p className="">Price</p>
          </div>
          <div className="col-md-2 d-flex">
            <p className="">Subtotal</p>
          </div>
        </div>

        {/* body of the cart table */}
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
            {products.length ? (
              // if products array conatins products
              products.map((product, index) => (
                <div key={product.product._id} className={`row ${styles.row}`}>
                  {/* first col */}
                  <div className="col-md-6 d-flex align-items-center p-0">
                    <img
                      src={product.product.imageCover}
                      alt="cart item"
                      className={`${styles.cartItem} me-4`}
                    />
                    <div className={`${styles.info} text-start mt-3 ms-0`}>
                      <p className={`text-black ${styles.title}`}>
                        {product.product.title}
                      </p>
                      <p>Size: ... , Color: ...</p>
                      <div
                        className="d-flex"
                        role="button"
                        onClick={() => deleteItem(product.product._id)}
                      >
                        <i className="fa-regular fa-trash-can me-2"></i>
                        <p>Remove</p>
                      </div>
                    </div>
                  </div>
                  {/* second col */}
                  <div className="col-md-2 d-flex align-items-center px-0">
                    <div className={`d-flex p-0 ${styles.quantityBtn}`}>
                      <p
                        className={`mb-0 py-2 ps-2`}
                        role="button"
                        onClick={() =>
                          updateItemQuantity(
                            product.product._id,
                            product.count - 1
                          )
                        }
                      >
                        -
                      </p>
                      <p className={`mb-0 py-2 px-3`}>{product.count}</p>
                      <p
                        className={`mb-0 py-2 pe-2`}
                        role="button"
                        onClick={() =>
                          updateItemQuantity(
                            product.product._id,
                            product.count + 1
                          )
                        }
                      >
                        +
                      </p>
                    </div>
                  </div>
                  <div className="col-md-2 d-flex align-items-center px-0 pt-3">
                    <p className="fw-bold">{product.price} EGP</p>
                  </div>
                  <div className="col-md-2 d-flex align-items-center pt-3">
                    <p className="fw-bold">
                      {product.count * product.price} EGP
                    </p>
                  </div>
                </div>
              ))
            ) : (
              // if there are no products in cart
              <div className="d-flex justify-content-center">
                <div>
                  <p className={styles.empty}>Cart is empty</p>
                </div>
              </div>
            )}
          </>
        )}

        {/* check out section */}
        <div className={`row mx-auto ${styles.checkout} `}>
          {/* left section */}
          <div className="col-md-6">
            <div className="left">
              <p className="fw-bold fs-6">Have a coupon?</p>
              <p className="fw-light">
                Add your code for an instant cart discount
              </p>
              <div className={styles.inputfield}>
                <input type="text" placeholder="Input" />
                <span role="button">Apply</span>
              </div>
            </div>
          </div>

          {/* right section */}
          <div className="col-md-6">
            <div className={styles.right}>
              <p className="fw-bold fs-6">Cart summary</p>
              {/* first option free shipping */}
              <div
                className={`d-flex align-items-center justify-content-between  px-3 my-3 ${styles.option}`}
                role="button"
              >
                <div className="form-check">
                  <input
                    onClick={freeShipping}
                    role="button"
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Free Shipping
                  </label>
                </div>
                <p className="m-0">0 EGP</p>
              </div>

              {/* second option express shipping */}
              <div
                className={`d-flex align-items-center justify-content-between px-3 my-3 ${styles.option}`}
                role="button"
              >
                <div className="form-check">
                  <input
                    onClick={expressShipping}
                    role="button"
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Express Shipping
                  </label>
                </div>
                <p className="m-0">50 EGP</p>
              </div>

              {/* subtotal price */}
              <div
                className={`d-flex align-items-center justify-content-between py-2 ${styles.price}`}
              >
                <p className="m-0 fs-6">Subtotal</p>
                <p className="m-0 fs-6">
                  {cartDetails.data?.totalCartPrice} EGP
                </p>
              </div>

              {/* total price */}
              <div
                className={`d-flex align-items-center justify-content-between py-2 fw-bold`}
              >
                <p className="m-0 fs-6">Total</p>
                <p className="m-0 fs-6">{totalPrice} EGP</p>
              </div>

              {/* checkout button */}
                <Link to="checkout" className={`${styles.checkBtn} btn w-100 mt-4 mb-1 ${styles.checkoutBtn}`} > Checkout </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
