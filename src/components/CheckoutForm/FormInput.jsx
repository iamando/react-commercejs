import React, { Fragment } from "react";
import { TextField, Grid } from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";

const FormInput = ({ name, label, required }) => {
  const { control } = useFormContext();

  return (
    <Fragment>
      <Grid item xs={12} sm={6}>
        <Controller
          render={({ field }) => (
            <TextField {...field} label={label} required={required} />
          )}
          defaultValue=""
          control={control}
          fullWidth
          name={name}
        />
      </Grid>
    </Fragment>
  );
};

export default FormInput;
