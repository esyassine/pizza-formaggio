import * as actionTypes from "../actions/actionTypes";

const initState = {
  products: [],
  productDetail: [],
};

const productReducer = (state = initState, action) => {
  switch (action.type) {
    // edit
    case actionTypes.EDIT_PRODUCT_SUCCESS:
      console.log("Edit product ok!", action.product);
      return { ...state, productDetail: action.payload };
    case actionTypes.EDIT_PRODUCT_ERROR:
      console.log("Edit product error!", action.err);
      return state;

    // create
    case actionTypes.CREATE_PRODUCT:
      console.log("Product added to menu.", action.product);
      return state;
    case actionTypes.CREATE_PRODUCT_ERROR:
      console.log("Create product error!", action.err);
      return state;
    case actionTypes.SEARCH_PRODUCTS:
      let filteredProducts = action.payload.products
        ? action.payload.products.filter((product) => {
            return product.name
              .toLowerCase()
              .includes(action.payload.searchQuery.toLowerCase());
          })
        : "";
      return {
        ...state,
        filtered: filteredProducts,
      };
    default:
      return state;
  }
};

export default productReducer;
