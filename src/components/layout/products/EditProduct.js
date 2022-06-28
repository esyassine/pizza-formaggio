import React, { useEffect, useState } from "react";
import Aos from "aos";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { updateProduct } from "../../firebase/actions/productActions";
import { clearError } from "../../firebase/actions/authActions";
// import { storage } from "../../firebase/config/fbConfig";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

import { Grid, Box} from "@material-ui/core";

import ImagesDropzone from "../../imagesDropzone";
import ImageElement from "../../imageElement";
const spinner = <div className="mx-3 spinner-border" role="status"></div>;

const EditProduct = (props, { match }) => {
    
  const {
    product
  } = props;

  console.log("props", props)
  let history = useHistory();
  // const dispatch = useDispatch();
  const [imageList, setImageList] = useState([]);
  const [imageReview, setImageReview] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [counter, setCounter] = useState(0);
  const [id] = useState(product.id);
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [image] = useState(product.image);


  const handleUpdate = (e) => {
    e.preventDefault();
    setLoading(true)
    console.log("imageList", product.image)
      props.updateProduct({
        id: id,
        name: name,
        description: description,
        price: price && parseFloat(price),
        // image: url,
        image: imageReview && imageReview !==[] && imageReview.length > 0  ? imageReview : image
      });    
      history.push("/menu");

    // const uploadTask = storage.ref(`images/${image.name}`).put(image);
    // uploadTask.on(
    //   "state_changed",
    //   (snapshot) => {},
    //   (error) => {
    //     console.log(error);
    //   },
    //   () => {
    //     storage
    //       .ref("images")
    //       .child(image.name)
    //       .getDownloadURL()
    //       .then((url) => {
    //         console.log(url);
    //         // this.setState({ image: url ? url : image });
    //         props.updateProduct({
    //           id: id,
    //           name: name,
    //           description: description,
    //           price: price && parseFloat(price),
    //           image: url,
    //         });
    //         history.push("/menu");
    //       });
    //   }
    // );
  };

    // useEffect(() => {
  //   if("ok"){
  //     // history.push("/menu")
  //   }else {
  //     setName(name);
  //     setDescription(description);
  //     setPrice(price);
  //     setImage(image);
  //     setCounter(counter);      
  //   }
  // }, [dispatch, history, props, id, "ok"]);

  useEffect(() => {
    Aos.init({ duration: 700 });
    imageList.forEach((image, index) => {
       if (image.status === "FINISH" || image.status === "UPLOADING") return;
       changeImageField(index, "status", "UPLOADING");
       const uploadTask = image.storageRef.put(image.file);
       uploadTask.on(         
          "state_changed",
          null,
          function error(err) {
             console.log("Error Image Upload:", err);
          },      
          async function complete() {
             const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
             changeImageField(index, "downloadURL", downloadURL);
             changeImageField(index, "status", "FINISH");
             const lUrls = imageList.map((item, index) => {
               return item;
             });
             const urls = lUrls.map((item, index) => {
               return item.downloadURL;
             });
             setImageReview(
               imageReview && imageReview.length > 0
                 ? imageReview.concat(urls)
                 : urls
             );
           }
       );
    });
 });


  const changeImageField = (index, parameter, value) => {
    const newArray = [...imageList];
    newArray[index][parameter] = value;
    setImageList(newArray);
 };

 const handleChangeOrderUp = (index) => {
    // If first, ignore
    if (index !== 0) {
       const newArray = [...imageList];
       const intermediate = newArray[index - 1];
       newArray[index - 1] = newArray[index];
       newArray[index] = intermediate;
       setImageList(newArray);
    }
 };

 const handleChangeOrderDown = (index) => {
    // If last, ignore
    if (index < imageList.length - 1) {
       const newArray = [...imageList];
       const intermediate = newArray[index + 1];
       newArray[index + 1] = newArray[index];
       newArray[index] = intermediate;
       setImageList(newArray);
    }
 };

 const handleDeleteImage = (index) => {
    console.log("index", index)
    imageList[index].storageRef
       .delete()
       .then(() => {
          const newArray = [...imageList];
          newArray.splice(index, 1);
          setImageList(newArray);
       })
       .catch((error) => {
          console.log("Error deleting file:", error);
       });
 };

 
 const renderPicturesLinks = () => {
  const pic = image && image !==[] && 
  image.map((pictureLink) => (
      <span
        style={{ display: "inline", fontSize: "1.1rem", padding: "5px" }}
        className=""
        key={pictureLink}
      >
        <img alt="" tag="" src={pictureLink} style={{ width: 88 }} />
      </span>
    ));
  return pic;
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
                {/* <img
                  loading="lazy"
                  // onLoad={this.handleLoad}
                  src={image}
                  alt="productImage"
                  width="60"
                  height="60"
                /> */}

                
                 {/* <div className="columns">
                  <div>{renderPicturesLinks()}</div>
                </div> */}
                {/* <input
                  type="file"
                  className="form-control"
                  id="image"
                  // onChange={this.handleFileChange}
                  onChange={(e) => setImage(e.target.value)}
                ></input> */}
                   <div className="columns">
                        <div>{renderPicturesLinks()}</div>
                      </div>
              
                  <Box border={1} margin={4} padding={3}>
                      <Grid
                        item
                        container
                        direction="column"
                        alignItems="center"
                        xs={12}
                        spacing={1}
                      >
                        <Grid item container xs={12} justify="center">
                            <ImagesDropzone setImageList={setImageList} />
                        </Grid>
                      </Grid>
                  </Box>                                                                         
                      {imageList && imageList.length > 0 && imageList.map((image, index) => {
                        return (
                            <Grid item key={image.file.size + index} >
                              <ImageElement
                                  image={image}
                                  index={index}
                                  isFirstElement={index === 0}
                                  isLastElement={index === imageList.length - 1}
                                  handleChangeOrderUp={handleChangeOrderUp}
                                  handleChangeOrderDown={handleChangeOrderDown}
                                  handleDeleteImage={handleDeleteImage}
                                  changeImageField={changeImageField}
                              />
                            </Grid>
                        );
                      })}               
       
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                // onClick={this.renderSpinner}
                disabled={loading}
              >
                Edit Product
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
