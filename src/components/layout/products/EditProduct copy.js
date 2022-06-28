import React, { useState, useEffect } from "react";
import Aos from "aos";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import { updateProduct } from "../../firebase/actions/productActions";
import { clearError } from "../../firebase/actions/authActions";
import { storage } from "../../firebase/config/fbConfig";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import moment from "moment";

//const today = moment();
const spinner = <div className="mx-3 spinner-border" role="status"></div>;

const EditProduct = (props, { match, history }) => {
    
  const {
    product
  } = props;

  console.log("props", props)

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [counter, setCounter] = useState(0);
  const [id, setId] = useState(product.id);
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [image, setImage] = useState(product.image);


  useEffect(() => {
    if("ok"){
      // history.push("/menu")
    }else {
      setName(name);
      setDescription(description);
      setPrice(price);
      setImage(image);
      setCounter(counter);      
    }
  }, [dispatch, history, props, id, "ok"]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
            // this.setState({ image: url ? url : image });
            props.updateProduct({
              id: id,
              name: name,
              description: description,
              price: price && parseFloat(price),
              image: url,
            });
            history.push("/menu");
          });
      }
    );
  };


  return (
    <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-lg-9 col-md-10 col-sm-11">
            <h2>Edit Product ID: {id}</h2>
            {/* <form onSubmit={handleUpdate}> */}
            <form onSubmit={(e) => handleUpdate(e)} >
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="name"
                  className="form-control"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                ></input>
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                ></input>
              </div>
              <div className="mb-3">
                <label htmlFor="price" className="form-label">
                  Price
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                ></input>
              </div>
              <div className="mb-3">
                <label htmlFor="image" className="form-label">
                  Image
                </label>
                {" "}
                <img
                  loading="lazy"
                  // onLoad={this.handleLoad}
                  src={image}
                  alt="productImage"
                  width="60"
                  height="60"
                />
                <input
                  type="file"
                  className="form-control"
                  id="image"
                  // onChange={this.handleFileChange}
                  onChange={(e) => setImage(e.target.value)}
                ></input>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                // onClick={this.renderSpinner}
                disabled={loading}
              >
                Edit
              </button>
              {loading ? spinner : null}
            </form>
          </div>
        </div>
      </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const products = state.firestore.data.products;
  const product = products ? { ...products[id], id } : null;
  return {
    product: product,
    profile: state.firebase.profile,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateProduct: (data) => dispatch(updateProduct(data)),
    clearError: () => dispatch(clearError()),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "products" }])
)(withRouter(EditProduct));

// export default connect(mapStateToProps, mapDispatchToProps)(CreateProduct);
