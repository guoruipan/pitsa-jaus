"use client";

import React from "react";
import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  Button,
  TextField,
  FormControl,
  FormHelperText,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import { update as updateUser } from "#/models/user";
import type { User } from "#/models/user";
import { AlertSuccess } from "#/components/ui/Alert";
import H1 from "#/components/texts/H1";
import { hashPassword } from "#/lib/security";

interface Props {
  user: User;
}

export default function EditAccountForm({ user }: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const validationSchema = yup.object({
    name: yup
      .string()
      .max(100, "Este campo no puede exceder los 100 caracteres")
      .required("Este campo es obligatorio"),
    email: yup
      .string()
      .email("Introduce una dirección de email válida")
      .max(100, "Este campo no puede exceder los 100 caracteres")
      .required("Este campo es obligatorio"),
    pwd: yup
      .string()
      .max(100, "Este campo no puede exceder los 100 caracteres"),
    home_address: yup
      .string()
      .max(255, "Este campo no puede exceder los 255 caracteres"),
    role: yup
      .string()
      .required("Este campo es obligatorio")
      .oneOf(["admin", "manager", "customer"], "Debes seleccionar una opción"),
  });

  const formik = useFormik({
    initialValues: {
      name: user.name,
      email: user.email,
      pwd: "",
      home_address: user.home_address || "",
      role: user.role,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true);
      setShowAlert(false);
      // si el campo pwd está vacío, mantener la vieja.
      // si el campo home_address está vacío, guardarlo vacío

      const updatedUser: User = {
        id: user.id,
        name: values.name,
        email: user.email,
        pwd: values.pwd,
        home_address: values.home_address || undefined,
        role: user.role,
        status: user.status,
      };

      if (updatedUser.pwd !== "") {
        updatedUser.pwd = await hashPassword(updatedUser.pwd);
      } else {
        updatedUser.pwd = user.pwd;
      }

      // en principio como no permito editar el email no habrá problema
      updateUser(updatedUser);

      setIsSubmitting(false);
      setShowAlert(true);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack spacing={2}>
        <H1>Editar cuenta</H1>
        {showAlert && <AlertSuccess>Se han actualizado los datos</AlertSuccess>}
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Nombre"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          fullWidth
          disabled
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
          id="home_address"
          name="home_address"
          label="Dirección de domicilio"
          value={formik.values.home_address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.home_address && Boolean(formik.errors.home_address)
          }
          helperText={formik.touched.home_address && formik.errors.home_address}
        />
        <FormControl fullWidth disabled>
          <InputLabel id="role_label">Rol</InputLabel>
          <Select
            id="role"
            name="role"
            labelId="role_label"
            label="Rol"
            value={formik.values.role}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.role && Boolean(formik.errors.role)}
          >
            <MenuItem value={"admin"}>Administrador</MenuItem>
            <MenuItem value={"manager"}>Gerente</MenuItem>
            <MenuItem value={"customer"}>Cliente</MenuItem>
          </Select>
          <FormHelperText style={{ color: "red" }}>
            {formik.touched.role && formik.errors.role}
          </FormHelperText>
        </FormControl>

        <Button
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Enviando..." : "Editar"}
        </Button>
      </Stack>
    </form>
  );
}
