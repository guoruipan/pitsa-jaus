"use client";

import React from "react";
import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button, TextField } from "@mui/material";
import Stack from "@mui/material/Stack";
import { AlertError } from "#/components/ui/Alert";
import { authenticate } from "#/lib/session";
import { getWithEmail as getUser } from "#/models/user";

// https://formik.org/docs/examples/with-material-ui
// https://codesandbox.io/p/sandbox/formik-v2-tutorial-final-ge1pt?file=%2Fsrc%2Findex.js%3A16%2C61
// https://formik.org/docs/examples/checkboxes
// https://formik.org/docs/guides/validation
// https://stackoverflow.com/questions/73531755/formik-handle-checkbox-validation-with-react-and-material-ui

export default function LoginForm() {
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    onSubmit: async (values) => {
      // quitamos los mensajes de error previos
      setErrorMessage("");
      setIsSubmitting(true);

      const user = await getUser(values.email);
      if (!user) {
        setErrorMessage("Usuario o contraseña incorrectos");
      } else if (user.status === "pending") {
        setErrorMessage("Esperando validación. Contacte a un administrador");
      } else {
        const error = await authenticate(values);
        if (error) setErrorMessage(error);
      }

      setIsSubmitting(false);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack spacing={2}>
        {errorMessage && <AlertError>{errorMessage}</AlertError>}
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
        <Button
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Iniciando..." : "Iniciar sesión"}
        </Button>
      </Stack>
    </form>
  );
}
