"use client";

// https://formik.org/docs/examples/with-material-ui
// https://codesandbox.io/p/sandbox/formik-v2-tutorial-final-ge1pt?file=%2Fsrc%2Findex.js%3A16%2C61
// https://formik.org/docs/examples/checkboxes
// https://formik.org/docs/guides/validation
// https://stackoverflow.com/questions/73531755/formik-handle-checkbox-validation-with-react-and-material-ui

// https://mui.com/material-ui/react-select/

import React from "react";
import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  Button,
  TextField,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Checkbox,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import { insert as createUser, getWithEmail as getUser } from "#/models/user";
import type { User, UserRole } from "#/models/user";
import { redirectTo } from "#/lib/navigation";
import { useSnackbar } from "#/contexts/SnackbarContext";

export default function RegisterForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showSnackbar } = useSnackbar();

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
      .max(100, "Este campo no puede exceder los 100 caracteres")
      .required("Este campo es obligatorio"),
    home_address: yup
      .string()
      .max(255, "Este campo no puede exceder los 255 caracteres"),
    role: yup
      .string()
      .required("Este campo es obligatorio")
      .oneOf(["admin", "manager", "customer"], "Debes seleccionar una opción"),
    privacyPolicy: yup
      .boolean()
      .required("Este campo es obligatorio")
      .oneOf([true], "Debes aceptar la política de privacidad."),
    termsConditions: yup
      .boolean()
      .required("Este campo es obligatorio")
      .oneOf([true], "Debes aceptar términos y condiciones."),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      pwd: "",
      home_address: "" as string | undefined,
      role: "",
      privacyPolicy: false,
      termsConditions: false,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true);

      const user: User = {
        id: 0,
        name: values.name,
        email: values.email,
        pwd: values.pwd,
        home_address: values.home_address,
        role: values.role as UserRole,
        status: values.role === "customer" ? "validated" : "pending",
      };

      /* home_address lo guardo como undefined cuando el campo está vacío, para evitar "" en bd */

      try {
        if (!(await getUser(user.email))) {
          await createUser(user);
          await redirectTo(
            user.status === "validated"
              ? "/auth/register/success"
              : "/auth/register/pending",
          );
        } else {
          formik.touched.email = true;
          formik.errors.email = "Ya existe un usuario con el email introducido";
        }
      } catch (error) {
        showSnackbar("No se ha podido registrar el usuario", "error");
      }

      setIsSubmitting(false);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack spacing={2}>
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
        <FormControl fullWidth>
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

        <FormControl>
          <FormControlLabel
            control={
              <Checkbox
                id="privacyPolicy"
                name="privacyPolicy"
                checked={formik.values.privacyPolicy}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            }
            label="Acepto la Política de privacidad"
          />
          <FormHelperText style={{ color: "red" }}>
            {formik.touched.privacyPolicy && formik.errors.privacyPolicy}
          </FormHelperText>
        </FormControl>

        <FormControl>
          <FormControlLabel
            control={
              <Checkbox
                id="termsConditions"
                name="termsConditions"
                checked={formik.values.termsConditions}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            }
            label="Acepto los Términos y condiciones"
          />
          <FormHelperText style={{ color: "red" }}>
            {formik.touched.termsConditions && formik.errors.termsConditions}
          </FormHelperText>
        </FormControl>

        <Button
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Enviando..." : "Enviar"}
        </Button>
      </Stack>
    </form>
  );
}
