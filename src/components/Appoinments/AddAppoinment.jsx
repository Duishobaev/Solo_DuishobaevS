import { Box, Button, Grid, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContext";
import classes from "./AddAppoinment.module.css";

const AddAppoinment = () => {
  const { addProduct } = useProducts();

  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
    picture: "",
    type: "",
  });

  const handleInp = (e) => {
    if (e.target.name === "price") {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };

      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };

      setProduct(obj);
    }
  };

  return (
    <Box sx={{ height: "100vh", padding: "20vh auto" }}>
      <center variant="h6" gutterBottom>
        <h2 className={classes.addTitle}>Ждем ваших указаний:</h2>
        <h3 className={classes.addTitle}>Добавьте новые абонементы!</h3>
      </center>

      <Grid
        item
        xs={12}
        md={6}
        sx={{
          margin: "10vh auto",
          boxShadow: 15,
          borderRadius: 3,
        }}
      >
        <form>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Название абонемента"
            variant="outlined"
            name="name"
            onChange={handleInp}
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="Описание"
            variant="outlined"
            name="description"
            onChange={handleInp}
          />{" "}
          <TextField
            fullWidth
            id="outlined-basic"
            label="Цена"
            variant="outlined"
            name="price"
            onChange={handleInp}
          />{" "}
          <TextField
            fullWidth
            id="outlined-basic"
            label="Рисунок"
            variant="outlined"
            name="picture"
            onChange={handleInp}
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="Тип абонемента"
            variant="outlined"
            name="type"
            onChange={handleInp}
          />
          <Stack direction="row" spacing={2} sx={{ bgcolor: "#fff" }}>
            <Button
              id="button"
              className={classes.btn}
              sx={{
                bgcolor: "orange",
                borderColor: "info.main",
                fontFamily: "inherit",
              }}
              fullWidth
              onClick={() => {
                addProduct(product);

                navigate("/products");
              }}
            >
              Добавить
            </Button>
          </Stack>
        </form>
      </Grid>
    </Box>
  );
};

export default AddAppoinment;
