"use client";

import React from "react";
import type { User } from "#/models/user";
import { Button, Stack, Typography } from "@mui/material";
import H1 from "#/components/texts/H1";
import { deleteWithId as deleteUser } from "#/models/user";
import { logout } from "#/lib/session";
import { AlertError } from "#/components/ui/Alert";
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField } from "@mui/material";
import { checkPassword } from "#/lib/session";

interface Props {
  user: User;
}

export default function DeleteUser({ user }: Props) {
  const validationSchema = yup.object({
    pwd: yup
      .string()
      .max(100, "Este campo no puede exceder los 100 caracteres")
      .required("Este campo es obligatorio"),
  });

  const formik = useFormik({
    initialValues: {
      pwd: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      if (await checkPassword(values.pwd, user.pwd)) {
        deleteUser(user.id);
        logout();
      } else {
        formik.touched.pwd = true;
        formik.errors.pwd = "Contraseña incorrecta";
      }
    },
  });

  return (
    <Stack spacing={3}>
      <H1>Borrar cuenta</H1>
      <AlertError>Esta acción es irreversible</AlertError>
      <Typography>Por favor, confirme su contraseña para continuar</Typography>
      <form onSubmit={formik.handleSubmit}>
        <Stack spacing={2}>
          <TextField
            fullWidth
            id="pwd"
            name="pwd"
            label="Contraseña"
            type="password"
            value={formik.values.pwd}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.pwd && Boolean(formik.errors.pwd)}
            helperText={formik.touched.pwd && formik.errors.pwd}
          />

          <Button color="primary" variant="contained" fullWidth type="submit">
            Borrar mi cuenta
          </Button>
        </Stack>
      </form>
    </Stack>
  );
}
