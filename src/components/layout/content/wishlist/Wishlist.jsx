import React from "react";

import Skeleton from "@yisheng90/react-loading";

import { connect } from "react-redux";
// import { compose } from "redux";
// import { firestoreConnect } from "react-redux-firebase";

import {
    deleteUser,
    updateProfile,
    clearError,
    removeFromFav,
  } from "../../../firebase/actions/authActions";

import Notification from "../../notification/Notification";
// import ProductList from "../../products/ProductList";
import WshlistList from "../../products/WshlistList";
import Footer from "../../footer/Footer";

const Wishlist = ({ products, profile, auth, history, filtered }) => {

//   console.log("Wishlist profile", profile)
  // const [filteredProducts, setFilteredProducts] = useState([]);
  // useEffect(() => {
  //   setFilteredProducts(filtered);
  // }, [filtered]);


//   {profile && profile.favorites && profile.favorites.length ? (
//     profile.favorites.map((item, index) => {


  return (
    <>
      <div className="container pt-2">
        <div className="d-flex flex-wrap justify-content-evenly">
          {profile && profile.favorites ? (
            <WshlistList
              products={profile.favorites}
              auth={auth}
              history={history}
              profile={profile}
            />
          ) : (
            <Skeleton
              className="mx-2 my-3 skeleton"
              style={{ height: "298px", width: "15rem", borderRadius: "20px" }}
              color="rgba(255,255,255,.3)"
              rows={4}
              translucent
            />
          )}
        </div>
      </div>
      <Notification />
      <Footer />
    </>
  );
};


const mapStateToProps = (state) => {
  return {
    products: state.firestore.ordered.products,
    profile: state.firebase.profile,
    auth: state.firebase.auth,
    filtered: state.product.filtered,
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
      deleteUser: (password) => dispatch(deleteUser(password)),
      updateProfile: (credentials, password) =>
        dispatch(updateProfile(credentials, password)),
      clearError: () => dispatch(clearError()),
      removeFromFav: (product) => dispatch(removeFromFav(product)),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);