import * as React from "react";
import { Box, Button, Grid, Stack, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Appoinments.module.css";
import { useProducts } from "../../contexts/ProductContext";
import { useAuth } from "../../contexts/AuthContext";
import { ADMIN } from "../../helpers/consts";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Appoinments(item) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const { deleteProduct, addProductToCart, checkProductInCart } = useProducts();

  const {
    user: { email },
  } = useAuth();

  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {item.name}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        height="194"
        image={item.picture}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.price}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <CardActions>
          {email === ADMIN ? (
            <>
              <Button size="small" onClick={() => deleteProduct(item.id)}>
                DELETE
              </Button>
              <Button size="small" onClick={() => navigate(`/edit/${item.id}`)}>
                EDIT
              </Button>
            </>
          ) : (
            <IconButton onClick={() => addProductToCart(item)}>
              <ShoppingCartIcon
                color={checkProductInCart(item.id) ? "secondary" : ""}
              />
            </IconButton>
          )}

          <span onClick={() => navigate(`/products/${item.id}`)}>more...</span>
        </CardActions>
        <Button
          id="button"
          sx={{
            height: "5vh",
            width: "15vw",
            bgcolor: "yellow",
            borderColor: "error.main",
            fontFamily: "inherit",
            fontSize: "1.7vh",
          }}
          color="warning"
          size="small"
          fullWidth
          onClick={() => {
            navigate("/buy");
          }}
        >
          Купить
        </Button>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes. Heat oil in a (14- to 16-inch) paella pan
            or a large, deep skillet over medium-high heat. Add chicken, shrimp
            and chorizo, and cook, stirring occasionally until lightly browned,
            6 to 8 minutes. Transfer shrimp to a large plate and set aside,
            leaving chicken and chorizo in the pan. Add pimentón, bay leaves,
            garlic, tomatoes, onion, salt and pepper, and cook, stirring often
            until thickened and fragrant, about 10 minutes. Add saffron broth
            and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
