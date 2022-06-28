import React, { useState, useEffect } from "react";
import Aos from "aos";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { createProduct } from "../../firebase/actions/productActions";
// import { storage } from "../../firebase/config/fbConfig";

import { Grid, Box} from "@material-ui/core";

import ImagesDropzone from "../../imagesDropzone";
import ImageElement from "../../imageElement";

const spinner = <div className="mx-3 spinner-border" role="status"></div>;
const CreateProduct = (props) => {


  let history = useHistory();
  // const dispatch = useDispatch();
  
  const [imageList, setImageList] = useState([]);
  const [imageReview, setImageReview] = useState([]);
  const [loading, setLoading] = useState(false);
  //const [id, setId] = useState(product.id);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);


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

 
const handleSubmit = (e) => {
  e.preventDefault();
    setLoading(true)
    props.createProduct({  
      name: name,
      description: description,
      price: price && parseFloat(price),    
      image: imageReview,
    });    
    history.push("/menu");
};



return (
  <div className="container" data-aos="fade-up">
  <div className="row">
    <div className="col-1"></div>
    <div className="col-lg-9 col-md-10 col-sm-11">
      <h1>Add New Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="name"
            className="form-control"
            id="name"
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
            onChange={(e) => setPrice(e.target.value)}
            required
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image
          </label>         
           
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
                    <Grid item key={image.file.size + index}>
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
          //onClick={renderSpinner}
          disabled={loading}
        >
          Create
        </button>
        {loading ? spinner : null}
      </form>
    </div>
  </div>
</div>
)
}


const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createProduct: (product) => dispatch(createProduct(product)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProduct);
