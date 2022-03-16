import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { ADMIN } from "../../helpers/consts";
import { Badge } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { useProducts } from "../../contexts/ProductContext";

const pages = [
  {
    name: "Наши ценности",
    link: "/ourvalues",
    id: "1",
  },
  {
    name: "Абонементы",
    link: "/products",
    id: "2",
  },
  {
    name: "Программы",
    link: "/programs",
    id: "3",
  },
  {
    name: "Отзывы",
    link: "/reviews",
    id: "6",
  },
];
const settings = ["Администрация"];

const Navbar = () => {
  const {
    handleLogout,
    user: { email },
  } = useAuth();
  const { cart } = useProducts();

  // const [navbar, setNavbar] = React.useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // const changeBackground = () => {
  //   if (window.scrollY <= 80) {
  //     setNavbar(true);
  //   } else {
  //     setNavbar(false);
  //   }
  // };
  // window.addEventListener("scroll", changeBackground);
  return (
    <AppBar
      position="sticky"
      sx={{
        background:
          "linear-gradient(90deg, rgba(66,233,27,1) 31%, rgba(0,241,255,1) 71%)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <Link to="/">
              <img
                className={classes.logo}
                src="https://t3.ftcdn.net/jpg/03/12/84/06/360_F_312840648_kKSR2KkZSlQNI2ocZjj7R2hWsZown2sO.jpg"
                alt=""
              />
            </Link>
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                  <Link to={page.link}>
                    <Typography
                      className={classes.hov}
                      sx={{ fontFamily: "Comfortaa" }}
                      textAlign="center"
                    >
                      {page.name}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <Link to="/">
              <img
                className={classes.logo}
                src="https://t3.ftcdn.net/jpg/03/12/84/06/360_F_312840648_kKSR2KkZSlQNI2ocZjj7R2hWsZown2sO.jpg"
                alt=""
              />
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link to={page.link}>
                <Button
                  className={classes.hov}
                  key={page.id}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontFamily: "Comfortaa",
                  }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}

            {/* ADMIN PANEL */}
            {email === ADMIN ? (
              <Link to="/admin">
                <Button
                  className={classes.hov}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontSize: 14,
                    fontFamily: "inherit",
                  }}
                >
                  Админ.панель
                </Button>
              </Link>
            ) : (
              <Link to="/cart">
                <Button sx={{ my: 2, color: "white" }}>
                  <Badge
                    badgeContent={cart?.products ? cart.products.length : 0}
                    color="secondary"
                  >
                    <StarIcon />
                  </Badge>
                </Button>
              </Link>
            )}
            {/* ADMIN PANEL */}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Box sx={{ flexGrow: 0 }}>
              {email ? (
                <Button
                  id="button"
                  onClick={handleLogout}
                  className={classes.login}
                >
                  Выйти
                </Button>
              ) : null}

              {email ? null : (
                <Link to="/auth">
                  <Button
                    id="button"
                    onClick={handleLogout}
                    className={classes.login}
                  >
                    Войти
                  </Button>
                </Link>
              )}
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
