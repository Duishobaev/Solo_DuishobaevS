import { Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContext";
import MediaCard from "../Product/ProductCard";
import SideBar from "../SideBar/SideBar";
import classes from "./Product.module.css";

const ProductList = ({ products }) => {
  const { getProducts } = useProducts();

  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, []);

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <div>
        <TextField
          className={classes.search}
          label="Поиск"
          color="secondary"
          focused
          sx={{ margin: "1vw", width: "80vw" }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Grid container spacing={6}>
          {products ? (
            products.map((item) => (
              <Grid item>
                <MediaCard item={item} key={item.id} />
              </Grid>
            ))
          ) : (
            <>
              <h2>пусто</h2>
            </>
          )}
        </Grid>
      </div>
    </div>
  );
};

export default ProductList;
