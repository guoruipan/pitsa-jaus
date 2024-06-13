"use client";

import React from "react";
import { changePassword, type User } from "#/models/user";
import { Button, Stack, Typography } from "@mui/material";
import H1 from "#/components/texts/H1";
import { logout } from "#/lib/session";
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField } from "@mui/material";
import { checkPassword } from "#/lib/security";
import { useState } from "react";

interface Props {
  user: User;
}

export default function ChangePasswordForm({ user }: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validationSchema = yup.object({
    pwd: yup
      .string()
      .max(100, "Este campo no puede exceder los 100 caracteres")
      .required("Este campo es obligatorio"),
    newPwd: yup
      .string()
      .max(100, "Este campo no puede exceder los 100 caracteres")
      .required("Este campo es obligatorio"),
    newPwd2: yup
      .string()
      .max(100, "Este campo no puede exceder los 100 caracteres")
      .required("Este campo es obligatorio"),
  });

  const formik = useFormik({
    initialValues: {
      pwd: "",
      newPwd: "",
      newPwd2: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true);

      if (values.newPwd !== values.newPwd2) {
        formik.touched.newPwd = true;
        formik.touched.newPwd2 = true;
        formik.errors.newPwd = "Las contraseñas deben coincidir";
        formik.errors.newPwd2 = "Las contraseñas deben coincidir";
        setIsSubmitting(false);
        return;
      }

      if (await checkPassword(values.pwd, user.pwd)) {
        changePassword(user.id, values.newPwd);
        logout();
      } else {
        formik.touched.pwd = true;
        formik.errors.pwd = "Contraseña incorrecta";
      }

      setIsSubmitting(false);
    },
  });

  return (
    <Stack spacing={3}>
      <H1>Cambiar contraseña</H1>
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
          <TextField
            fullWidth
            id="newPwd"
            name="newPwd"
            label="Nueva contraseña"
            type="password"
            value={formik.values.newPwd}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.newPwd && Boolean(formik.errors.newPwd)}
            helperText={formik.touched.newPwd && formik.errors.newPwd}
          />
          <TextField
            fullWidth
            id="newPwd2"
            name="newPwd2"
            label="Nueva contraseña"
            type="password"
            value={formik.values.newPwd2}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.newPwd2 && Boolean(formik.errors.newPwd2)}
            helperText={formik.touched.newPwd2 && formik.errors.newPwd2}
          />

          <Button
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Cambiar mi contraseña"}
          </Button>
        </Stack>
      </form>
    </Stack>
  );
}
