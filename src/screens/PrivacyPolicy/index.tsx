import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import H1 from "#/components/ui/H1";
import H2 from "#/components/ui/H2";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import CheckIcon from "@mui/icons-material/Check";

export default function PrivacyPolicyScreen({pageTitle} : {pageTitle : string}) {
    return (
      <>
        <Stack spacing={2} marginBottom={"1.5rem"}>
          <H1 sx={{ textAlign: "center" }}>
            {pageTitle} de PitsaJaus &#174;
          </H1>
          <Typography
            variant="body1"
            sx={{ textAlign: "center", fontStyle: "italic" }}
          >
            Modificado por última vez: 28/03/2024
          </Typography>
          <Typography variant="body1">
            En PitsaJaus, nos comprometemos a proteger la privacidad de nuestros
            clientes. Esta Política de Privacidad describe cómo recopilamos,
            utilizamos y protegemos la información personal que usted nos
            proporciona a través de nuestro sitio web, aplicación móvil o
            cualquier otro medio.
          </Typography>
        </Stack>
  
        <Stack spacing={2} marginBottom={"1.5rem"}>
          <H2 sx={{ textAlign: "center" }}>
            Información que recopilamos
          </H2>
          <Typography variant="body1">Recopilamos información personal de usted cuando:</Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <CheckIcon />
              </ListItemIcon>
              Realiza un pedido: Recopilamos su nombre, dirección, número de
              teléfono, dirección de correo electrónico y método de pago.
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckIcon />
              </ListItemIcon>
              Crea una cuenta: Recopilamos su nombre, dirección de correo
              electrónico, contraseña y preferencias de pedido.
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckIcon />
              </ListItemIcon>
              Se suscribe a nuestro boletín informativo: Recopilamos su dirección
              de correo electrónico.
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckIcon />
              </ListItemIcon>
              Nos contacta: Recopilamos su nombre, dirección de correo electrónico
              y cualquier otra información que nos proporcione.
            </ListItem>
          </List>
        </Stack>
  
        <Stack spacing={2} marginBottom={"1.5rem"}>
          <H2 sx={{ textAlign: "center" }}>
            Cómo utilizamos su información
          </H2>
          <Typography variant="body1">Utilizamos su información personal para:</Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <CheckIcon />
              </ListItemIcon>
              Procesar sus pedidos
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckIcon />
              </ListItemIcon>
              Enviarle información sobre sus pedidos
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckIcon />
              </ListItemIcon>
              Mejorar nuestros productos y servicios
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckIcon />
              </ListItemIcon>
              Enviarle ofertas y promociones
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckIcon />
              </ListItemIcon>
              Responder a sus preguntas y comentarios
            </ListItem>
          </List>
        </Stack>
  
        <Stack spacing={2} marginBottom={"1.5rem"}>
          <H2 sx={{ textAlign: "center" }}>
            Cómo compartimos su información
          </H2>
          <Typography variant="body1">
            No compartimos su información personal con terceros sin su
            consentimiento. Sin embargo, podemos compartir su información con:
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <CheckIcon />
              </ListItemIcon>
              Proveedores de servicios que nos ayudan a operar nuestro negocio,
              como proveedores de procesamiento de pagos y empresas de entrega.
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckIcon />
              </ListItemIcon>
              Terceros que nos ayudan a mejorar nuestros productos y servicios,
              como empresas de análisis de datos.
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckIcon />
              </ListItemIcon>
              Autoridades legales, si así lo exige la ley.
            </ListItem>
          </List>
        </Stack>
  
        <Stack spacing={2} marginBottom={"1.5rem"}>
          <H2 sx={{ textAlign: "center" }}>
            Seguridad de su información
          </H2>
          <Typography variant="body1">
            Tomamos medidas de seguridad razonables para proteger su información
            personal contra el acceso no autorizado, el uso indebido, la
            divulgación, la alteración o la destrucción.
          </Typography>
        </Stack>
  
        <Stack spacing={2} marginBottom={"1.5rem"}>
          <H2 sx={{ textAlign: "center" }}>
            Sus derechos
          </H2>
          <Typography variant="body1">Usted tiene derecho a:</Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <CheckIcon />
              </ListItemIcon>
              Acceder a su información personal
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckIcon />
              </ListItemIcon>
              Solicitar que corrijamos o eliminemos su información personal
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckIcon />
              </ListItemIcon>
              Oponerse al tratamiento de su información personal
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckIcon />
              </ListItemIcon>
              Restringir el tratamiento de su información personal
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckIcon />
              </ListItemIcon>
              Solicitar la portabilidad de su información personal
            </ListItem>
          </List>
          <Typography variant="body1">
            Para ejercer cualquiera de estos derechos, puede contactarnos a través
            de la información que se encuentra al final de esta Política de
            Privacidad.
          </Typography>
        </Stack>
  
        <Stack spacing={2} marginBottom={"1.5rem"}>
          <H2 sx={{ textAlign: "center" }}>
            Cambios en esta Política de Privacidad
          </H2>
          <Typography variant="body1">
            Nos reservamos el derecho de modificar esta Política de Privacidad en
            cualquier momento. Si realizamos cambios sustanciales a esta Política
            de Privacidad, se lo notificaremos por correo electrónico o mediante
            un aviso en nuestro sitio web.
          </Typography>
        </Stack>
  
        <Stack spacing={2} marginBottom={"1.5rem"}>
          <H2 sx={{ textAlign: "center" }}>
            Contacto
          </H2>
          <Typography variant="body1">
            Si tiene alguna pregunta sobre esta Política de Privacidad, puede
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
  
        <Typography variant="body1">Fecha de vigencia: 28 de marzo de 2024</Typography>
      </>
    );
  }