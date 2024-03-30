// este fichero ya no es necesario. borrar cuando mueva los types fuera

export type Usuario = {
  id: number;
  nombre: string;
  pwd: string;
  email: string;
  direccion: string;
  admin: boolean;
};



export type Ingrediente = {
  id: number;
  nombre: string;
  descripcion: string;
};

export type Pedido = {
  id: number;
  idUsuario: number;
  total: number;
  fechaPedido: string;
  fechaEnvio: string;
};

export type PedidoLinea = {
  id: number;
  idPedido: number;
  idPizza: number;
  cantidad: number;
  totalLinea: number;
};

export type IngredientePizza = {
  idPizza: number;
  idIngrediente: number;
};
