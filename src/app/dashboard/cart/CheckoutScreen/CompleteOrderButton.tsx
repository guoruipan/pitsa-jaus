import React from "react";
import { useShoppingCart } from "#/contexts/ShoppingCartContext";
import { useSnackbar } from "#/contexts/SnackbarContext";
import { User } from "#/models/user";
import { Order, insertOrder, insertOrderLine } from "#/models/order";
import { redirectTo } from "#/lib/navigation";
import { Button } from "@mui/material";

export default function CompleteOrderButton({ user }: { user: User }) {
  const { cart, getCartTotal, store, clearCart, changeStore } =
    useShoppingCart();
  const { showSnackbar } = useSnackbar();

  const handleClick = async () => {
    if (!store) {
      showSnackbar("Aún no has seleccionado una tienda", "error");
      return;
    }
    if (cart.length === 0) {
      showSnackbar("Aún no hay nada en el carrito", "error");
      return;
    }
    if (!user.home_address) {
      showSnackbar("No hay dirección de envío especificada", "error");
      return;
    }

    const order: Order = {
      id: 0,
      user_id: user.id,
      store_id: store.id,
      total: getCartTotal(),
      order_date: new Date(),
      sent_date: undefined,
      address: user.home_address,
    };

    const order_id = await insertOrder(order);

    if (!order_id) {
      showSnackbar("No se pudo crear el pedido", "error");
      return;
    }

    cart.map((cartItem) => {
      insertOrderLine({
        id: 0,
        order_id: order_id,
        pizza_id: cartItem.pizza.id,
        quantity: cartItem.quantity,
      });
    });

    showSnackbar("Se ha creado el pedido", "success");
    clearCart();
    changeStore(undefined);
    redirectTo("/dashboard/my-orders");
  };
  return (
    <Button variant="contained" onClick={handleClick}>
      Completar la compra
    </Button>
  );
}
