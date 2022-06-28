import React, { useEffect, useState } from "react";
import Aos from "aos";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import {
  removeProduct,
  // editProduct,
} from "../../firebase/actions/productActions";
import spinner from "../../../assets/svg/spinner.svg";

const RemoveProduct = ({ products, removeProduct }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    Aos.init({ duration: 700 });
    setLoading(false);
  }, []);

  return (
    <div className="container" data-aos="fade-up">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-lg-9 col-md-10 col-sm-11">
          <h1>Remove Product</h1>
          <ul
            className="list-group my-3"
            style={{ border: "2px solid #c0c0c0" }}
          >
            {products && products.length ? (
              products.map((product, index) => {
                return (
                  <li
                    className="list-group-item"
                    key={index}
                    style={{
                      background: "rgba(29,29,29,.5)",
                      borderBottom: "2px solid #c0c0c0",
                    }}
                  >
                    <div className="d-flex justify-content-between">
                      <Link to={`/product/${product.id}`} key={product.id}>
                        <img
                          loading="lazy"
                          // onLoad={this.handleLoad}
                          src={loading ? spinner : product.image}
                          alt="productImage"
                          width="60"
                          height="60"
                        />
                      </Link>
                      <label className="mx-2">{product.name}</label>
                      {/* <label>{product.name}</label> */}
                      <div>
                        {/* <label className="mx-2">{product.name}</label> */}
                        <label className="mx-2">{`${
                          product.price && product.price.toFixed(2)
                        }$`}</label>
                        <Link to={`/edit/${product.id}`} state={{ ...product }}>
                          <button
                            className="btn btn-danger"
                            // onClick={() => editProduct(product)}
                          >
                            Edit
                          </button>
                        </Link>
                        <span style={{ width: "2px" }}> </span>
                        <button
                          className="btn btn-danger"
                          onClick={() => removeProduct(product.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })
            ) : (
              <p>There are currently no products in the menu.</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.firestore.ordered.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeProduct: (productId) => dispatch(removeProduct(productId)),
    // editProduct: (productId) => dispatch(editProduct(productId)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "products" }])
)(RemoveProduct);
