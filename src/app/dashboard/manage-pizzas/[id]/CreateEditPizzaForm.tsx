"use client";

import React from "react";
import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button, TextField } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useSnackBar } from "#/contexts/SnackbarContext";
import { useRouter } from "next/navigation";
import { Pizza } from "#/models/pizza";
import { update as updatePizza, insert as insertPizza } from "#/models/pizza";

interface Props {
  pizza: Pizza | undefined;
}

// si pizza === undefined, es nuevo. Si no, es editar

export default function CreateEditPizzaForm({ pizza }: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showSnackbar } = useSnackBar();
  const router = useRouter();

  const validationSchema = yup.object({
    name: yup
      .string()
      .max(100, "Este campo no puede exceder los 100 caracteres")
      .required("Este campo es obligatorio"),
    description: yup
      .string()
      .max(255, "Este campo no puede exceder los 255 caracteres")
      .required("Este campo es obligatorio"),
    price: yup
      .number()
      .positive("Este campo no puede ser negativo")
      .required("Este campo es obligatorio"),
    photo: yup // TODO implement actual photo input
      .string()
      .max(100, "Este campo no puede exceder los 100 caracteres")
      .required("Este campo es obligatorio"),
  });

  const formik = useFormik({
    initialValues: {
      name: pizza?.name || "",
      description: pizza?.description || "",
      price: pizza?.price || 0,
      photo: pizza?.photo || "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true);

      const updatedPizza: Pizza = {
        id: pizza?.id || 0,
        name: values.name,
        description: values.description,
        price: values.price,
        photo: values.photo,
      };

      !pizza ? insertPizza(updatedPizza) : updatePizza(updatedPizza);
      router.push("/dashboard/manage-pizzas");

      setIsSubmitting(false);
      showSnackbar("Se han actualizado los datos", "success");
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
          id="description"
          name="description"
          label="Descripción"
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.description && Boolean(formik.errors.description)
          }
          helperText={formik.touched.description && formik.errors.description}
        />
        <TextField
          fullWidth
          type="number"
          id="price"
          name="price"
          label="price"
          value={formik.values.price}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.price && Boolean(formik.errors.price)}
          helperText={formik.touched.price && formik.errors.price}
        />
        <TextField // TODO make actual file input
          fullWidth
          id="photo"
          name="photo"
          label="Foto"
          value={formik.values.photo}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.photo && Boolean(formik.errors.photo)}
          helperText={formik.touched.photo && formik.errors.photo}
        />
        {/*  <FormControl fullWidth>
          <Button
            component="label"
            variant="outlined"
            startIcon={<FileUploadIcon />}
            sx={{ mr: "1rem" }}
          >
            Subir foto
            <input
              type="file"
              accept="image/*"
              hidden
              id="photoFile"
              name="photoFile"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Button>
          <FormHelperText sx={{ color: "red" }}>
            {formik.touched.photoFile && formik.errors.photoFile}
          </FormHelperText>
        </FormControl> */}

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
