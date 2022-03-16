import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useProducts } from "../../contexts/ProductContext";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import { ADMIN } from "../../helpers/consts";
import classes from "./ProductCard.module.css";
import StarIcon from "@mui/icons-material/Star";

export default function MediaCard({ item }) {
  const { deleteProduct, addProductToCart, checkProductInCart } = useProducts();

  const {
    user: { email },
  } = useAuth();

  const navigate = useNavigate();

  return (
    <Card className={classes.card} sx={{ maxWidth: "100%" }}>
      <CardMedia
        className={classes.cardImg}
        component="img"
        height="140"
        image={item.picture}
        alt="green iguana"
      />
      <CardContent className={classes.cardWrap}>
        <Typography gutterBottom variant="h6" component="div">
          {item.name}
        </Typography>
        <Typography
          className={classes.cardDescr}
          variant="body2"
          color="text.secondary"
          fontSize={"2vh"}
        >
          {item.description}
        </Typography>
        <Typography className={classes.cardPrice} variant="h6" color="#616161">
          {item.price}
        </Typography>
      </CardContent>
      <CardActions>
        {email === ADMIN ? (
          <div className={classes.btnWrap}>
            <Button
              className={classes.cardBtn}
              size="small"
              onClick={() => deleteProduct(item.id)}
            >
              Удалить
            </Button>
            <Button
              className={classes.cardBtn}
              size="small"
              onClick={() => navigate(`/edit/${item.id}`)}
            >
              Изменить
            </Button>
          </div>
        ) : (
          <IconButton onClick={() => addProductToCart(item)}>
            <StarIcon color={checkProductInCart(item.id) ? "secondary" : ""} />
          </IconButton>
        )}
      </CardActions>
    </Card>
  );
}
