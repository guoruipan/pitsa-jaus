import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import PageTitle from "#/components/ui/PageTitle";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import CheckIcon from "@mui/icons-material/Check";

export default function TermsAndCondScreen ({pageTitle} : {pageTitle : string}) {
    return (
        <>
      <Stack spacing={2} marginBottom={"1.5rem"}>
        <PageTitle sx={{ textAlign: "center" }}>
          {pageTitle} de PitsaJaus ®
        </PageTitle>
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
      </Stack>

      <Stack spacing={2} marginBottom={"1.5rem"}>
        <Typography variant="h4" component={"h2"} sx={{ textAlign: "center" }}>
          1. Pedidos y Pagos:
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>
            Puede realizar su pedido a través de nuestro sitio web, aplicación
            móvil o llamando a nuestro teléfono +34 611 611 611.
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>
            Los precios indicados en el menú en línea o en el local incluyen el
            Impuesto sobre el Valor Añadido (IVA) vigente.
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>
            Aceptamos pagos con tarjeta de crédito/débito, efectivo y
            plataformas de pago electrónico (si aplica). El pago se realiza al
            momento de realizar el pedido (en línea o por teléfono) o al
            recibirlo en el local (para recogidas).
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>
            PitsaJaus se reserva el derecho de modificar los precios del menú
            sin previo aviso.
          </ListItem>
        </List>
      </Stack>

      <Stack spacing={2} marginBottom={"1.5rem"}>
        <Typography variant="h4" component={"h2"} sx={{ textAlign: "center" }}>
          2. Entregas y Recogidas:
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>
            El tiempo estimado de entrega a domicilio dependerá de la zona y la
            hora del pedido. Se le informará del tiempo estimado durante el
            proceso de pedido.
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>
            Existe un monto mínimo de pedido para entregas a domicilio. Este
            monto se especificará en el momento de realizar el pedido.
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>
            Para recogidas en el local, su pedido estará listo en el tiempo
            estimado que se le indique durante el pedido.
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>
            PitsaJaus no se responsabiliza por retrasos en la entrega
            ocasionados por factores externos ajenos a nuestro control (clima,
            tráfico, etc.).
          </ListItem>
        </List>
      </Stack>

      <Stack spacing={2} marginBottom={"1.5rem"}>
        <Typography variant="h4" component={"h2"} sx={{ textAlign: "center" }}>
          3. Promociones y Descuentos:
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>
            Las promociones y descuentos ofrecidos por PitsaJaus estarán sujetas
            a condiciones específicas que se detallarán en cada caso.
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>
            Los cupones de descuento solo serán válidos por un tiempo
            determinado y bajo las condiciones indicadas en el cupón.
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>
            No se podrán combinar cupones de descuento a menos que se indique
            expresamente lo contrario.
          </ListItem>
        </List>
      </Stack>

      <Stack spacing={2} marginBottom={"1.5rem"}>
        <Typography variant="h4" component={"h2"} sx={{ textAlign: "center" }}>
          4. Política de Cancelaciones:
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>
            Los pedidos pueden ser cancelados sin costo alguno hasta 15 minutos
            después de haber sido realizados.
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>
            Para pedidos cancelados con posterioridad a los 15 minutos, se
            aplicará un cargo por la elaboración del pedido.
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>
            No se aceptan cancelaciones de pedidos una vez que se encuentren en
            camino hacia su domicilio.
          </ListItem>
        </List>
      </Stack>

      <Stack spacing={2} marginBottom={"1.5rem"}>
        <Typography variant="h4" component={"h2"} sx={{ textAlign: "center" }}>
          5. Reembolsos:
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>
            En caso de recibir un pedido incorrecto o incompleto, PitsaJaus se
            compromete a enviarle el pedido correcto lo antes posible sin costo
            adicional.
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>
            Si el cliente no desea esperar el reemplazo del pedido, se emitirá
            un reembolso completo del monto del pedido.
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>
            Los reembolsos se realizarán a través del mismo método de pago
            utilizado para realizar el pedido.
          </ListItem>
        </List>
      </Stack>

      <Stack spacing={2} marginBottom={"1.5rem"}>
        <Typography variant="h4" component={"h2"} sx={{ textAlign: "center" }}>
          6. Modificación de Términos y Condiciones:
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>
            PitsaJaus se reserva el derecho de modificar estos Términos y
            Condiciones en cualquier momento.
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>
            Los cambios se publicarán en nuestra página web y entrarán en vigor
            a partir de la fecha de publicación.
          </ListItem>
        </List>
      </Stack>

      <Stack spacing={2} marginBottom={"1.5rem"}>
        <Typography variant="h4" component={"h2"} sx={{ textAlign: "center" }}>
          7. Ley Aplicable y Jurisdicción:
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>
            Estos Términos y Condiciones se rigen e interpretan de acuerdo con
            las leyes de España.
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>
            Cualquier controversia relacionada con estos Términos y Condiciones
            se someterá a la jurisdicción de los tribunales competentes de
            Zaragoza, España.
          </ListItem>
        </List>
      </Stack>

      <Stack spacing={2} marginBottom={"1.5rem"}>
        <Typography variant="h4" component={"h2"} sx={{ textAlign: "center" }}>
          8. Contacto
        </Typography>
        <Typography variant="body1">
          Si tiene alguna pregunta sobre estos Términos y Condiciones, puede
          contactarnos a través de:
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>
            Correo electrónico: atencioncliente@pitsajaus.com
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>
            Teléfono: +34 611 611 611
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>
            Dirección: Calle Mayor, 12, Zaragoza, España
          </ListItem>
        </List>
      </Stack>

      <Typography variant="body1">
        Fecha de vigencia: 28 de marzo de 2024
      </Typography>
    </>
    );
}