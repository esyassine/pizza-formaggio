import React from "react";

import {
  Paper,
  Grid,
  CircularProgress,
  Box,
  // TextField,
  IconButton,
} from "@material-ui/core";

import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { RiDeleteBin5Line } from "react-icons/ri";

export default function ImageElement({
  image,
  index,
  isFirstElement,
  isLastElement,
  handleChangeOrderUp,
  handleChangeOrderDown,
  handleDeleteImage,
  // changeImageField,
}) {
  return (
    <Box my={2} width={600}>
      <Paper>
        <Grid
          container
          direction="row"
          justify="center"
          spacing={2}
          style={{
            backgroundImage:
              "-webkit-linear-gradient(90deg, rgba(29, 29, 29, 0.7) 0%, black 90%), url(/static/media/background.e472756b.jpg)",
            backgroundAttachment: "fixed",
            border: "1px solid",
            borderColor: "white"
            
          }}
        >
          <Grid item container alignItems="center" justify="center" xs={6}>
            {image.downloadURL ? (
              <img
                src={image.downloadURL}
                alt={`Upload Preview ${index + 1}`}
                style={{
                  maxHeight: "100px",
                  maxWidth: "100px",
                }}
              />
            ) : (
              <Box p={2}>
                <CircularProgress />
              </Box>
            )}
          </Grid>
          {/* <Grid item container alignItems="center" xs={4}>
                  <TextField
                     multiline
                     size="small"
                     rows={4}
                     fullWidth
                     variant="outlined"
                     value={image.description}
                     onChange={(event) => {
                        changeImageField(
                           index,
                           "description",
                           event.target.value
                        );
                     }}
                  />
               </Grid> */}
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
            item
            xs={2}
          >
            <Grid item container alignItems="center" justify="center">
              {!isFirstElement && (
                <IconButton
                  aria-label="Image up"
                  onClick={() => handleChangeOrderUp(index)}
                >
                  <IoIosArrowUp />
                </IconButton>
              )}
            </Grid>
            <Grid item container alignItems="center" justify="center" xs={4}>
              <IconButton
                aria-label="Delete Image"
                onClick={() => handleDeleteImage(index)}
              >
                <RiDeleteBin5Line />
              </IconButton>
            </Grid>
            <Grid item container alignItems="center" justify="center">
              {!isLastElement && (
                <IconButton
                  aria-label="Image down"
                  onClick={() => handleChangeOrderDown(index)}
                >
                  <IoIosArrowDown />
                </IconButton>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
