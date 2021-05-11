import React, { Fragment } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";

// Assets
import logo from "../../assets/e-commerce-icon-png-17.jpg";

// Styles
import useStyles from "./styles";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <Fragment>
      <div>
        <AppBar position="fixed" className={classes.appBar} color="inherit">
          <Toolbar>
            <Typography
              component={Link}
              to="/"
              variant="h6"
              className={classes.title}
              color="inherit"
            >
              <img
                src={logo}
                alt="E-commerce"
                height="25px"
                className={classes.image}
              />
              E-COMMERCE
            </Typography>
            <div className={classes.grow} />
            {location.pathname === "/" && (
              <div className={classes.button}>
                <IconButton
                  component={Link}
                  to="/cart"
                  aria-label="Show cart items"
                  color="inherit"
                >
                  <Badge badgeContent={totalItems} color="secondary">
                    <ShoppingCart />
                  </Badge>
                </IconButton>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    </Fragment>
  );
};

export default Navbar;
