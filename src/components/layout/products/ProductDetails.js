import React, { useState, useEffect } from "react";
import Aos from "aos";
import Ribbon from "../ribbon/Ribbon";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { withRouter } from "react-router-dom";
import { addToCart } from "../../firebase/actions/shopActions";
import { addToFav } from "../../firebase/actions/authActions";
import { isMobile } from "react-device-detect";
import Notification from "../notification/Notification";
import Footer from "../footer/Footer";
import spinner from "../../../assets/svg/spinner.svg";

const ProductDetails = ({
  product,
  products,
  profile,
  auth,
  history,
  addToCart,
  addToFav,
  favorites,
}) => {
  const [isLoading, handleLoad] = useState(true);

  useEffect(() => {
    Aos.init({ duration: 500 });
  });

  const favorite =
    auth.uid && favorites
      ? favorites.some((fav) => fav.id === product.id)
      : false;

  if (product) {
    return (
      <>
        <div className="container">
          <div className="about">
            <div
              data-aos="fade-right"
              className={`d-flex${isMobile ? "" : " floated-iframe"}`}
              
            >
              <img
                onLoad={() => handleLoad(false)}
                src={isLoading ? spinner : product.image}
                className="card-img-top mb-3"
                alt="productImage"
                style={{
                  height: "calc(10em + 20vw)",
                  width: "calc(10em + 25vw)",
                  borderRadius: "20px",
                }}
              />
            <Ribbon type={product && product.ribbonType} />
            </div>
            <div className="overview">
              <h2 className="pb-1" data-aos="fade-left">
                {/* Product Detail: */}
              </h2>
              {/* <img
                className="py-1 floated-logo"
                data-aos="fade-left"
                src={Logo}
                alt=""
              /> */}
              <div className="justify-text" data-aos="fade-left">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <h5>{`${product.price && product.price.toFixed(2)}$`}</h5>

                <div className="justify-content-center">
                  <button
                    className="btn btn-light cart-hover"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Add to cart"
                    onClick={() =>
                      auth.uid
                        ? addToCart(
                            history.location.pathname.split("/product/")[1],
                            products,
                            auth.uid
                          )
                        : history.push("/signin")
                    }
                  >
                    <i className="fas fa-shopping-bag"></i>
                  </button>
                  <button
                    className="mx-2 btn btn-danger btn-like"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Add to favorites"
                    disabled={favorite}
                    onClick={() =>
                      auth.uid ? addToFav(product) : history.push("/signin")
                    }
                  >
                    {/* <i className={`${favorite ? `fas` : `far`} fa-heart`}></i> */}
                    <i
                      className={`${
                        favorite ? `fas` : `far`
                      } fas fa-heart fa-lg`}
                    ></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Notification />
        <Footer />
      </>
    );
  } else {
    return (
      <div className="container">
        <div className="text-center">
          <img
            src={spinner}
            alt=""
            style={{
              height: "calc(5em + 20vw)",
              width: "calc(5em + 25vw)",
            }}
          />
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const products = state.firestore.data.products;
  const product = products ? products[id] : null;
  return {
    product: product,
    profile: state.firebase.profile,
    products: state.firestore.ordered.products,
    auth: state.firebase.auth,
    favorites: state.firebase.profile.favorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (productID, products, userID) =>
      dispatch(addToCart(productID, products, userID)),
    addToFav: (product) => dispatch(addToFav(product)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "products" }])
)(withRouter(ProductDetails));
