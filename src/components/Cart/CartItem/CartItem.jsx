import React, { Fragment } from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";

// Styles
import useStyles from "./styles";

const CartItem = ({ item, handleUpdateCartQty, handleRemoveFromCart }) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Card>
        <CardMedia
          image={item.media.source}
          alt={item.name}
          className={classes.media}
        />
        <CardContent className={classes.cardContent}>
          <Typography variant="h4">{item.name}</Typography>
          <br />
          <Typography variant="h5">
            {item.line_total.formatted_with_symbol}
          </Typography>
          <br />
        </CardContent>
        <CardActions className={classes.cardActions}>
          <div className={classes.buttons}>
            <Button
              type="button"
              size="small"
              onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}
            >
              -
            </Button>
            <Typography>{item.quantity}</Typography>
            <Button
              type="button"
              size="small"
              onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}
            >
              +
            </Button>
          </div>
          <Button
            variant="contained"
            type="button"
            color="secondary"
            onClick={() => handleRemoveFromCart(item.id)}
          >
            Remove
          </Button>
        </CardActions>
      </Card>
    </Fragment>
  );
};

export default CartItem;
