import { Box, Button, Grid, Stack, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContext";
import classes from "./EditProduct.module.css";

const EditProduct = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const { getProductDetails, productDetails, saveEditedProduct } =
    useProducts();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
    picture: "",
    type: "",
  });

  const handleInput = (e, product, setProduct) => {
    let obj = {
      ...product,
      [e.target.name]: e.target.value,
    };
    setProduct(obj);
  };

  useEffect(() => {
    getProductDetails(id);
  }, []);

  useEffect(() => {
    setProduct(productDetails);
  }, [productDetails]);

  return (
    <div>
      <Box
        sx={{ bgcolor: "transparent", height: "100vh", padding: "20vh auto" }}
      >
        <center className={classes.addTitle} variant="h6" gutterBottom>
          ИЗМЕНЕНИЕ ДАННЫХ
        </center>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            margin: "10vh auto",
            boxShadow: 3,
            borderRadius: 3,
          }}
        >
          <form>
            <TextField
              value={product.name}
              fullWidth
              id="outlined-basic"
              label="Название абонемента"
              variant="outlined"
              name="name"
              onChange={(e) => handleInput(e, product, setProduct)}
            />
            <TextField
              value={product.description}
              fullWidth
              id="outlined-basic"
              label="Описание"
              variant="outlined"
              name="description"
              onChange={(e) => handleInput(e, product, setProduct)}
            />{" "}
            <TextField
              value={product.price}
              fullWidth
              id="outlined-basic"
              label="Цена"
              variant="outlined"
              name="price"
              onChange={(e) => handleInput(e, product, setProduct)}
            />{" "}
            <TextField
              value={product.picture}
              fullWidth
              id="outlined-basic"
              label="Рисунок"
              variant="outlined"
              name="picture"
              onChange={(e) => handleInput(e, product, setProduct)}
            />
            <TextField
              value={product.type}
              fullWidth
              id="outlined-basic"
              label="Тип абонемента"
              variant="outlined"
              name="type"
              onChange={(e) => handleInput(e, product, setProduct)}
            />
            <Stack direction="row" spacing={2} sx={{ bgcolor: "#880e4f" }}>
              <Button
                className={classes.btn}
                id="button"
                sx={{
                  bgcolor: "orange",
                  borderColor: "info.main",
                  fontFamily: "inherit",
                }}
                fullWidth
                onClick={() => {
                  saveEditedProduct(product);
                  navigate("/products");
                }}
              >
                Изменить
              </Button>
            </Stack>
          </form>
        </Grid>
      </Box>
    </div>
  );
};

export default EditProduct;
