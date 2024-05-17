"use client";

import React from "react";
import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button, TextField } from "@mui/material";
import Stack from "@mui/material/Stack";
import {
  Store,
  update as updateStore,
  getWithName as getStore,
  insert as insertStore,
} from "#/models/store";
import { useSnackBar } from "#/contexts/SnackbarContext";
import { useRouter } from "next/navigation";

interface Props {
  store: Store | undefined;
  manager_id: number;
}

// si store === undefined, es nuevo. Si no, es editar

export default function CreateEditStoreForm({ store, manager_id }: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showSnackbar } = useSnackBar();
  const router = useRouter();

  const validationSchema = yup.object({
    name: yup
      .string()
      .max(100, "Este campo no puede exceder los 100 caracteres")
      .required("Este campo es obligatorio"),
    address: yup
      .string()
      .max(100, "Este campo no puede exceder los 100 caracteres")
      .required("Este campo es obligatorio"),
    city: yup
      .string()
      .max(100, "Este campo no puede exceder los 100 caracteres")
      .required("Este campo es obligatorio"),
    state: yup
      .string()
      .max(100, "Este campo no puede exceder los 100 caracteres")
      .required("Este campo es obligatorio"),
    postcode: yup
      .string()
      .max(100, "Este campo no puede exceder los 100 caracteres")
      .required("Este campo es obligatorio"),
    phone_number: yup
      .string()
      .max(100, "Este campo no puede exceder los 100 caracteres"),
  });

  const formik = useFormik({
    initialValues: {
      name: store?.name || "",
      address: store?.address || "",
      city: store?.city || "",
      state: store?.state || "",
      postcode: store?.postcode || "",
      phone_number: store?.phone_number || "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true);

      const updatedStore: Store = {
        id: store?.id || 0,
        name: values.name,
        address: values.address,
        city: values.city,
        state: values.state,
        postcode: values.postcode,
        phone_number: values.phone_number || undefined,
        manager_id: store?.manager_id || manager_id,
      };

      if (!store) {
        if (!(await getStore(updatedStore.name))) {
          insertStore(updatedStore);
          router.refresh();
        } else {
          formik.touched.name = true;
          formik.errors.name = "Ya existe una tienda con el nombre introducido";
        }
      } else {
        updateStore(updatedStore);
      }

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
          disabled={!!store} // si hay tienda, no permitimos editar
        />
        <TextField
          fullWidth
          id="address"
          name="address"
          label="Dirección"
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.address && Boolean(formik.errors.address)}
          helperText={formik.touched.address && formik.errors.address}
        />
        <TextField
          fullWidth
          id="city"
          name="city"
          label="Ciudad"
          value={formik.values.city}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.city && Boolean(formik.errors.city)}
          helperText={formik.touched.city && formik.errors.city}
        />
        <TextField
          fullWidth
          id="state"
          name="state"
          label="Estado"
          value={formik.values.state}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.state && Boolean(formik.errors.state)}
          helperText={formik.touched.state && formik.errors.state}
        />
        <TextField
          fullWidth
          id="postcode"
          name="postcode"
          label="Código Postal"
          value={formik.values.postcode}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.postcode && Boolean(formik.errors.postcode)}
          helperText={formik.touched.postcode && formik.errors.postcode}
        />
        <TextField
          fullWidth
          id="phone_number"
          name="phone_number"
          label="Número de teléfono"
          value={formik.values.phone_number}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.phone_number && Boolean(formik.errors.phone_number)
          }
          helperText={formik.touched.phone_number && formik.errors.phone_number}
        />

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
