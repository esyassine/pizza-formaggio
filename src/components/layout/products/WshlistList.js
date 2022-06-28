import React from "react";

// import ProductCard from "./ProductCard";
import WishlistCard from "./WishlistCard";

const WishlistList = ({ products, auth, history }) => {
  return (
    <>
      {products !== undefined && products.length ? (
        products.map((product) => {
          const image = product.image && product.image[0] && product.image[0].replace(
            "https://firebasestorage.googleapis.com/v0/b/palette-store.appspot.com/",
            "https://ik.imagekit.io/vcgvc3rhier/"
          );
          // console.log(image);
          return (
            <WishlistCard
              key={product.id}
              product={product}
              products={products}
              image={image}
              auth={auth}
              history={history}
            />
          );
        })
      ) : (
        <div className="text-center">
          <i className="fas fa-search fa-10x py-5 not-found"></i>
          <h3 className="not-found">No favorites yet.</h3>
        </div>
      )}
    </>
  );
};

export default WishlistList;
