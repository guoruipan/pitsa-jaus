"use client";

// https://formik.org/docs/examples/with-material-ui
// https://codesandbox.io/p/sandbox/formik-v2-tutorial-final-ge1pt?file=%2Fsrc%2Findex.js%3A16%2C61
// https://formik.org/docs/examples/checkboxes
// https://formik.org/docs/guides/validation
// https://stackoverflow.com/questions/73531755/formik-handle-checkbox-validation-with-react-and-material-ui

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
} from "@mui/material";
import { PaperStack } from "#/components/containers/PaperStack";
import H2 from "#/components/texts/H2";
import { AlertSuccess } from "#/components/ui/Alert";

export default function ContactForm() {
  const [showAlert, setShowAlert] = useState(false);

  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Introduce una dirección de email válida")
      .required("Este campo es obligatorio"),
    subject: yup
      .string()
      .max(50, "Este campo no puede exceder los 50 caracteres")
      .required("Este campo es obligatorio"),
    body: yup.string().required("Este campo es obligatorio"),
    privacyPolicy: yup
      .boolean()
      .required("Este campo es obligatorio")
      .oneOf([true], "Debes aceptar la política de privacidad."),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      subject: "",
      body: "",
      privacyPolicy: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setShowAlert(true);
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <PaperStack>
        <H2>Formulario de contacto</H2>
        {showAlert && <AlertSuccess>Formulario enviado con éxito</AlertSuccess>}
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
          id="subject"
          name="subject"
          label="Asunto"
          value={formik.values.subject}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.subject && Boolean(formik.errors.subject)}
          helperText={formik.touched.subject && formik.errors.subject}
        />
        <TextField
          fullWidth
          id="body"
          name="body"
          label="Cuerpo del mensaje"
          value={formik.values.body}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.body && Boolean(formik.errors.body)}
          helperText={formik.touched.body && formik.errors.body}
          multiline
          rows={4}
        />
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

        <Button color="primary" variant="contained" fullWidth type="submit">
          Enviar
        </Button>
      </PaperStack>
    </form>
  );
}
