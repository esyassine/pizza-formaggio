import * as actionTypes from "./actionTypes";
// import data from "./mock";

export const createProduct = (product) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("products")
      .add({
        ...product,
        name: product.name,
        description: product.description,
        price: product.price,
        image: product.image,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: actionTypes.CREATE_PRODUCT, product });
      })
      .catch((err) => {
        dispatch({ type: actionTypes.CREATE_PRODUCT_ERROR, err });
      });
  };
};

export const removeProduct = (productId) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("products")
      .doc(productId)
      .delete()
      .then(() => {
        dispatch({ type: actionTypes.REMOVE_PRODUCT_SUCCESS, productId });
      })
      .catch((err) => {
        dispatch({ type: actionTypes.REMOVE_PRODUCT_ERROR, err });
      });
  };
};

export const updateProduct = (product) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    // const userId = getState().firebase.auth.uid;
    const id = product.id;
    firestore
      .collection("products")
      .doc(id)
      .update(product)
      .then(() => {
        dispatch({ type: actionTypes.EDIT_PRODUCT_SUCCESS, payload: product });
      })
      .catch((err) => {
        dispatch({ type: actionTypes.EDIT_PRODUCT_ERROR, err });
      });
  };
};

export const productDetail = (productDetail) => {
  return {
    type: actionTypes.EDIT_PRODUCT_SUCCESS,
    payload: productDetail,
  };
};

// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     const cred = firebase.auth.EmailAuthProvider.credential(
//       user.email,
//       password
//     );
//     user
//       .reauthenticateWithCredential(cred)
//       .then(() => {
//         firestore
//           .collection("products")
//           .doc(id)
//           .update(product)
//           .then(() => {
//             dispatch({ type: actionTypes.EDIT_PRODUCT_SUCCESS });
//           })
//           .catch((err) => {
//             dispatch({ type: actionTypes.EDIT_PRODUCT_ERROR, err });
//           });
//       })
//       .catch((err) => {
//         dispatch({ type: actionTypes.EDIT_PRODUCT_ERROR, err });
//       });
//   }
// });
//};

// return (dispatch, getState, { getFirebase, getFirestore }) => {
//   const firestore = getFirestore();
//   firestore
//     .collection("products")
//     .doc(productId)
//     .delete()
//     .then(() => {
//       dispatch({ type: actionTypes.EDIT_PRODUCT_SUCCESS, productId });
//     })
//     .catch((err) => {
//       dispatch({ type: actionTypes.EDIT_PRODUCT_ERROR, err });
//     });
// };
// };

export const searchProducts = (products, search) => {
  // console.log("products", products);
  return {
    type: actionTypes.SEARCH_PRODUCTS,
    payload: {
      products: products, //data
      searchQuery: search,
    },
  };
};
