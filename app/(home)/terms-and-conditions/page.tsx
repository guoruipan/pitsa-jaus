import { Metadata } from "next";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const pageTitle = "Términos y condiciones";

export const metadata: Metadata = {
  title: pageTitle,
};

function MyBox ({children} : {children : React.ReactNode}) {
  return (
    <Box sx={{ "& > * + *": { marginTop: "0.75rem" }, marginBottom: "1.5rem" }}>
      {children}
    </Box>
  );
}

export default function Page() {
  return (
    <>
    {/* "& > * + *": { marginTop: "0.75rem" } es un selector css que indica que los hijos de Box, excepto el primer elemento, tendrán un marginTop */}
    {/* con esto busco imitar la clase space-y-4 de tailwind css */}
      <MyBox>
        <Typography variant="h2" component={"h1"} sx={{ textAlign: "center" }}>
          {pageTitle} de PitsaJaus ®
        </Typography>
        <Typography
          variant="body1"
          sx={{ textAlign: "center", fontStyle: "italic" }}
        >
          Modificado por última vez: 28/03/2024
        </Typography>
        <Typography variant="body1">
          ¡Bienvenido a PitsaJaus! Agradecemos su preferencia por nuestras
          deliciosas pizzas. Para garantizar una experiencia agradable para
          todos los clientes, a continuación se detallan nuestros Términos y
          Condiciones:
        </Typography>
      </MyBox>

      <MyBox>
        <Typography variant="h4" component={"h2"} sx={{ textAlign: "center" }}>
          1. Pedidos y Pagos:
        </Typography>
        <List>
          <ListItem>
            Puede realizar su pedido a través de nuestro sitio web, aplicación
            móvil o llamando a nuestro teléfono +34 611 611 611.
          </ListItem>
          <ListItem>
            Los precios indicados en el menú en línea o en el local incluyen el
            Impuesto sobre el Valor Añadido (IVA) vigente.
          </ListItem>
          <ListItem>
            Aceptamos pagos con tarjeta de crédito/débito, efectivo y
            plataformas de pago electrónico (si aplica). El pago se realiza al
            momento de realizar el pedido (en línea o por teléfono) o al
            recibirlo en el local (para recogidas).
          </ListItem>
          <ListItem>
            PitsaJaus se reserva el derecho de modificar los precios del menú
            sin previo aviso.
          </ListItem>
        </List>
      </MyBox>

      <MyBox>
        <Typography variant="h4" component={"h2"} sx={{ textAlign: "center" }}>
          2. Entregas y Recogidas:
        </Typography>
        <List>
          <ListItem>
            El tiempo estimado de entrega a domicilio dependerá de la zona y la
            hora del pedido. Se le informará del tiempo estimado durante el
            proceso de pedido.
          </ListItem>
          <ListItem>
            Existe un monto mínimo de pedido para entregas a domicilio. Este
            monto se especificará en el momento de realizar el pedido.
          </ListItem>
          <ListItem>
            Para recogidas en el local, su pedido estará listo en el tiempo
            estimado que se le indique durante el pedido.
          </ListItem>
          <ListItem>
            PitsaJaus no se responsabiliza por retrasos en la entrega
            ocasionados por factores externos ajenos a nuestro control (clima,
            tráfico, etc.).
          </ListItem>
        </List>
      </MyBox>

      <MyBox>
        <Typography variant="h4" component={"h2"} sx={{ textAlign: "center" }}>
          3. Promociones y Descuentos:
        </Typography>
        <List>
          <ListItem>
            Las promociones y descuentos ofrecidos por PitsaJaus estarán sujetas
            a condiciones específicas que se detallarán en cada caso.
          </ListItem>
          <ListItem>
            Los cupones de descuento solo serán válidos por un tiempo
            determinado y bajo las condiciones indicadas en el cupón.
          </ListItem>
          <ListItem>
            No se podrán combinar cupones de descuento a menos que se indique
            expresamente lo contrario.
          </ListItem>
        </List>
      </MyBox>

      <MyBox>
        <Typography variant="h4" component={"h2"} sx={{ textAlign: "center" }}>
          4. Política de Cancelaciones:
        </Typography>
        <List>
          <ListItem>
            Los pedidos pueden ser cancelados sin costo alguno hasta 15 minutos
            después de haber sido realizados.
          </ListItem>
          <ListItem>
            Para pedidos cancelados con posterioridad a los 15 minutos, se
            aplicará un cargo por la elaboración del pedido.
          </ListItem>
          <ListItem>
            No se aceptan cancelaciones de pedidos una vez que se encuentren en
            camino hacia su domicilio.
          </ListItem>
        </List>
      </MyBox>

      <MyBox>
        <Typography variant="h4" component={"h2"} sx={{ textAlign: "center" }}>
          5. Reembolsos:
        </Typography>
        <List>
          <ListItem>
            En caso de recibir un pedido incorrecto o incompleto, PitsaJaus se
            compromete a enviarle el pedido correcto lo antes posible sin costo
            adicional.
          </ListItem>
          <ListItem>
            Si el cliente no desea esperar el reemplazo del pedido, se emitirá
            un reembolso completo del monto del pedido.
          </ListItem>
          <ListItem>
            Los reembolsos se realizarán a través del mismo método de pago
            utilizado para realizar el pedido.
          </ListItem>
        </List>
      </MyBox>

      <MyBox>
        <Typography variant="h4" component={"h2"} sx={{ textAlign: "center" }}>
          6. Modificación de Términos y Condiciones:
        </Typography>
        <List>
          <ListItem>
            PitsaJaus se reserva el derecho de modificar estos Términos y
            Condiciones en cualquier momento.
          </ListItem>
          <ListItem>
            Los cambios se publicarán en nuestra página web y entrarán en vigor
            a partir de la fecha de publicación.
          </ListItem>
        </List>
      </MyBox>

      <MyBox>
        <Typography variant="h4" component={"h2"} sx={{ textAlign: "center" }}>
          7. Ley Aplicable y Jurisdicción:
        </Typography>
        <List>
          <ListItem>
            Estos Términos y Condiciones se rigen e interpretan de acuerdo con
            las leyes de España.
          </ListItem>
          <ListItem>
            Cualquier controversia relacionada con estos Términos y Condiciones
            se someterá a la jurisdicción de los tribunales competentes de
            Zaragoza, España.
          </ListItem>
        </List>
      </MyBox>

      <MyBox>
        <Typography variant="h4" component={"h2"} sx={{ textAlign: "center" }}>
          8. Contacto
        </Typography>
        <p>
          Si tiene alguna pregunta sobre estos Términos y Condiciones, puede
          contactarnos a través de:
        </p>
        <List>
          <ListItem>Correo electrónico: grpzaragoza@gmail.com</ListItem>
          <ListItem>Teléfono: +34 611 611 611</ListItem>
          <ListItem>Dirección: Calle Mayor, 12, Zaragoza, España</ListItem>
        </List>
      </MyBox>

      <Typography variant="body1">
        Fecha de vigencia: 28 de marzo de 2024
      </Typography>
    </>
  );
}
