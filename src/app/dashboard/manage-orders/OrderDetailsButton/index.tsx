import React from "react";
import { listOrderDetails } from "#/models/order";
import DetailsButton from "./DetailsButton";

interface Props {
  order_id: number;
}

export default async function OrderDetailsButton({ order_id }: Props) {
  const orderDetails = await listOrderDetails(order_id);

  return <DetailsButton orderDetails={orderDetails} />;
}
