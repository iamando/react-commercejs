import React, { Fragment } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

// Styles
import useStyles from "./styles";

const Product = ({ product, handleAddToCart }) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={product.media.source}
          title={product.name}
        />
        <CardContent>
          <div className={classes.cardContent}>
            <Typography variant="h5" gutterBottom>
              {product.name}
            </Typography>
            <br />
            <Typography variant="h5">
              {product.price.formatted_with_symbol}
            </Typography>
            <br />
          </div>
          <Typography
            dangerouslySetInnerHTML={{ __html: product.description }}
            variant="body2"
            color="textSecondary"
          />
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
          <IconButton
            aria-label="Add to Cart"
            onClick={() => handleAddToCart(product.id, 1)}
          >
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </Card>
    </Fragment>
  );
};

export default Product;
