import React, { Component } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { login } from "./ckeckLogin";
import { Route, Redirect } from "react-router-dom";

import {
  Box,
  FormGroup,
  Typography,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
class Login extends Component {
  renderLoginForm = (formikProps) => {
    return (
      <form
        onSubmit={formikProps.handleSubmit}
        onChange={formikProps.handleChange}
      >
        <FormGroup>
          <Box mb={5}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="email"
                  label="Your Email"
                  type="text"
                />
                {formikProps.errors.email && (
                  <Typography color="secondary">
                    {formikProps.errors.email}
                  </Typography>
                )}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="password"
                  label="Your Password"
                  type="password"
                />
                {formikProps.errors.password && (
                  <Typography color="secondary">
                    {formikProps.errors.password}
                  </Typography>
                )}
              </Grid>
            </Grid>
          </Box>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            fullWidth
          >
            Submit
          </Button>
        </FormGroup>
      </form>
    );
  };
  ifSubmitSucess() {
    return <Route render={<Redirect to="/dashboard" />} />;
  }
  render() {
    return (
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(data) => {
          console.log("submitted", data);
          login();
          this.ifSubmitSucess();
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email(),
          password: Yup.string(),
        })}
      >
        {(formikProps) => this.renderLoginForm(formikProps)}
      </Formik>
    );
  }
}
export default Login;
