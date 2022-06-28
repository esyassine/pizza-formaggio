import React, { Component } from "react";

import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { clearError } from "../firebase/actions/authActions";

import ProductDetails from "../../components/layout/products/ProductDetails";
import Home from "../layout/content/home/Home";
import About from "../layout/content/about/About";
import Menu from "../layout/content/menu/Menu";
import Cart from "../layout/content/cart/Cart";
import Wishlist from "../layout/content/wishlist/Wishlist";
import Upload from "../../pages/Upload";

import ProtectedRoute from "../router/ProtectedRoute";
import EditProduct from "../layout/products/EditProduct";

class Router extends Component {
  componentDidCatch(){
    const { history, clearError } = this.props;
    this.unlisten = history.listen((location, action) => {
      clearError();
    });
  }

  // componentWillMount() {
  //   const { history, clearError } = this.props;
  //   this.unlisten = history.listen((location, action) => {
  //     clearError();
  //   });
  // }
  componentWillUnmount() {
    this.unlisten();
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/menu" component={Menu}></Route>
        <Route path="/upload" component={Upload}></Route> 
        <Route path="/wishlist" component={Wishlist}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route path="/product/:id" component={ProductDetails}></Route>
        <Route path="/edit/:id" component={EditProduct}></Route>
        <ProtectedRoute />
      </Switch>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearError: () => dispatch(clearError()),
  };
};

export default connect(null, mapDispatchToProps)(withRouter(Router));
