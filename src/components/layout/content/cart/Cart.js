import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setCheckoutData } from "../../../firebase/actions/shopActions";
import Footer from "../../footer/Footer";
import CartItem from "./CartItem";
import { isMobile } from "react-device-detect";

const Cart = ({ auth, setCheckoutData, cart }) => {
  const [subtotal, setSubtotal] = useState(0);
  const [delivery, setDelivery] = useState(0);
  const [total, setTotal] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [initCart, setCart] = useState(null);
  // const [mouseOver, setMouseOver] = useState(false);

  useEffect(() => {
    let items = 0;
    let price = 0;
    let deliveryFee = 5;
    let initCart = JSON.parse(window.sessionStorage.getItem(auth.uid))
      ? JSON.parse(window.sessionStorage.getItem(auth.uid))
      : [];

    initCart.forEach((item) => {
      items += item.quantity;
      price += item.quantity * item.price;
    });

    setCart(initCart);
    setSubtotal(((price * 100) / 100).toFixed(2));
    setDelivery(deliveryFee.toFixed(2));
    setTotal((deliveryFee + (price * 100) / 100).toFixed(2));
    setTotalItems(items);
  }, [cart, auth, subtotal, totalItems, setSubtotal, setTotalItems]);

  return (
    <React.Fragment>
      {initCart && initCart.length ? (
        <div className="container">
          <div className="about">
            <div
              // data-aos="fade-right"
              className={`d-flex${isMobile ? "d-flex" : " floated-iframe"}`}
              // style={{ width: "50vw" }}
            >
              <div className="container p-0">
                {initCart.map((product) => {
                  return (
                    <CartItem
                      key={product.id}
                      productData={product}
                      uid={auth.uid}
                    />
                  );
                })}
              </div>
            </div>
            <div className="overview">
              <h2 className="pb-1" data-aos="fade-left">
                {/* <h3 className="px-4 pt-3">Summary</h3> */}
                {/* Product Detail: */}
              </h2>
              <div className="justify-text">
                {initCart && initCart.length ? (
                  <div
                  // className="mx-auto checkout-footer"
                  // onMouseOver={() => setMouseOver(true)}
                  // onMouseOut={() => setMouseOver(false)}
                  // style={mouseOver ? { height: "calc(17em - 2vw)" } : null}
                  >
                    <h3
                      // className="d-flex justify-content-between"
                      style={{ textAlign: "center" }}
                    >
                      Summary
                    </h3>
                    <hr />
                    <div className="row checkout-details">
                      <div className="col-10 col-md-6">
                        <div className="d-flex justify-content-between">
                          <div>
                            <h5>In Cart:</h5>
                            <h5>Subtotal:</h5>
                            <h5>Delivery:</h5>
                            <h5>Total:</h5>
                          </div>
                          <div className="checkout-value">
                            <h5>{totalItems}</h5>
                            <h5>{subtotal}$</h5>
                            <h5>{delivery}$</h5>
                            <h5>{total}$</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-4">
                        <div
                          className="d-flex justify-content-center"
                          style={{ width: "250px" }}
                        >
                          <Link
                            to="/menu"
                            className="btn btn-light text-wrap m-2"
                          >
                            Add More
                          </Link>
                          <Link
                            to="/checkout"
                            className="btn btn-primary text-wrap my-2"
                            onClick={() =>
                              setCheckoutData(total, delivery, initCart)
                            }
                          >
                            Checkout
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ) : auth && auth.uid ? (
        <div className="text-center">
          <i className="far fa-frown-open fa-10x py-5 not-found"></i>
          <h3 className="not-found">Cart is empty.</h3>
        </div>
      ) : (
        <div className="text-center" style={{ textAlign: "center" }}>
          <i className="fas fa-user-circle fa-10x py-5 not-found"></i>
          <h3 className="not-found">Sign in to shop now.</h3>
        </div>
      )}
      <Footer />
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCheckoutData: (total, delivery, items) =>
      dispatch(setCheckoutData(total, delivery, items)),
  };
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
