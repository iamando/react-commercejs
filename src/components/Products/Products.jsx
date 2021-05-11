import React, { Fragment } from "react";
import { Grid } from "@material-ui/core";

// Components
import Product from "./Product/Product";

// Styles
import useStyles from "./styles";

const Products = ({ products, handleAddToCart }) => {
  const classes = useStyles();

  return (
    <Fragment>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justify="center" spacing={4}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} handleAddToCart={handleAddToCart} />
            </Grid>
          ))}
        </Grid>
      </main>
    </Fragment>
  );
};

export default Products;
