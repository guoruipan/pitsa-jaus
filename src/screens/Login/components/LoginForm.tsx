"use client";

import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button, TextField } from "@mui/material";
import { useFormState, useFormStatus } from "react-dom";
import { authenticate } from "#/lib/actions";
import Stack from "@mui/material/Stack";

// https://formik.org/docs/examples/with-material-ui
// https://codesandbox.io/p/sandbox/formik-v2-tutorial-final-ge1pt?file=%2Fsrc%2Findex.js%3A16%2C61
// https://formik.org/docs/examples/checkboxes
// https://formik.org/docs/guides/validation
// https://stackoverflow.com/questions/73531755/formik-handle-checkbox-validation-with-react-and-material-ui


export default function LoginForm() {
    const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  
    const validationSchema = yup.object({
      email: yup
        .string()
        .email("Introduce una dirección de email válida")
        .required("Este campo es obligatorio"),
      password: yup.string().required("Este campo es obligatorio"),
    });
  
    const formik = useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        dispatch;
      },
    });
  
    return (
      <form onSubmit={formik.handleSubmit}>
        <Stack spacing={2}>
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Contraseña"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
  
          <LoginButton />
        </Stack>
      </form>
    );
  }
  
  function LoginButton() {
    const { pending } = useFormStatus();
  
    return (
      <Button
        color="primary"
        variant="contained"
        fullWidth
        type="submit"
        aria-disabled={pending}
      >
        Iniciar sesión
      </Button>
    );
  }
  