import { Metadata } from 'next';

const pageTitle = 'Política de privacidad';

export const metadata: Metadata = {
  title: pageTitle,
};

export default function Page() {
  return (
    <>
      <div className="space-y-3 mb-16">
        <h1 className="text-center font-bold text-2xl">
          {pageTitle} de PitsaJaus &#174;
        </h1>
        <p className="text-center italic">
          Modificado por última vez: 28/03/2024
        </p>
        <p>
          En PitsaJaus, nos comprometemos a proteger la privacidad de nuestros
          clientes. Esta Política de Privacidad describe cómo recopilamos,
          utilizamos y protegemos la información personal que usted nos
          proporciona a través de nuestro sitio web, aplicación móvil o
          cualquier otro medio.
        </p>
      </div>

      <div className="space-y-3 mb-16">
        <h2 className="text-center text-lg font-bold">
          Información que recopilamos
        </h2>
        <p>Recopilamos información personal de usted cuando:</p>
        <ul className="list-disc ml-8">
          <li>
            Realiza un pedido: Recopilamos su nombre, dirección, número de
            teléfono, dirección de correo electrónico y método de pago.
          </li>
          <li>
            Crea una cuenta: Recopilamos su nombre, dirección de correo
            electrónico, contraseña y preferencias de pedido.
          </li>
          <li>
            Se suscribe a nuestro boletín informativo: Recopilamos su dirección
            de correo electrónico.
          </li>
          <li>
            Nos contacta: Recopilamos su nombre, dirección de correo electrónico
            y cualquier otra información que nos proporcione.
          </li>
        </ul>
      </div>

      <div className="space-y-3 mb-16">
        <h2 className="text-center text-lg font-bold">
          Cómo utilizamos su información
        </h2>
        <p>Utilizamos su información personal para:</p>
        <ul className="list-disc ml-8">
          <li>Procesar sus pedidos</li>
          <li>Enviarle información sobre sus pedidos</li>
          <li>Mejorar nuestros productos y servicios</li>
          <li>Enviarle ofertas y promociones</li>
          <li>Responder a sus preguntas y comentarios</li>
        </ul>
      </div>

      <div className="space-y-3 mb-16">
        <h2 className="text-center text-lg font-bold">
          Cómo compartimos su información
        </h2>
        <p>
          No compartimos su información personal con terceros sin su
          consentimiento. Sin embargo, podemos compartir su información con:
        </p>
        <ul className="list-disc ml-8">
          <li>
            Proveedores de servicios que nos ayudan a operar nuestro negocio,
            como proveedores de procesamiento de pagos y empresas de entrega.
          </li>
          <li>
            Terceros que nos ayudan a mejorar nuestros productos y servicios,
            como empresas de análisis de datos.
          </li>
          <li>Autoridades legales, si así lo exige la ley.</li>
        </ul>
      </div>

      <div className="space-y-3 mb-16">
        <h2 className="text-center text-lg font-bold">
          Seguridad de su información
        </h2>
        <p>
          Tomamos medidas de seguridad razonables para proteger su información
          personal contra el acceso no autorizado, el uso indebido, la
          divulgación, la alteración o la destrucción.
        </p>
      </div>

      <div className="space-y-3 mb-16">
        <h2 className="text-center text-lg font-bold">Sus derechos</h2>
        <p>Usted tiene derecho a:</p>
        <ul className="list-disc ml-8">
          <li>Acceder a su información personal</li>
          <li>Solicitar que corrijamos o eliminemos su información personal</li>
          <li>Oponerse al tratamiento de su información personal</li>
          <li>Restringir el tratamiento de su información personal</li>
          <li>Solicitar la portabilidad de su información personal</li>
        </ul>
        <p>
          Para ejercer cualquiera de estos derechos, puede contactarnos a través
          de la información que se encuentra al final de esta Política de
          Privacidad.
        </p>
      </div>

      <div className="space-y-3 mb-16">
        <h2 className="text-center text-lg font-bold">
          Cambios en esta Política de Privacidad
        </h2>
        <p>
          Nos reservamos el derecho de modificar esta Política de Privacidad en
          cualquier momento. Si realizamos cambios sustanciales a esta Política
          de Privacidad, se lo notificaremos por correo electrónico o mediante
          un aviso en nuestro sitio web.
        </p>
      </div>

      <div className="space-y-3 mb-16">
        <h2 className="text-center text-lg font-bold">Contacto</h2>
        <p>
          Si tiene alguna pregunta sobre esta Política de Privacidad, puede
          contactarnos a través de:
        </p>
        <ul className="list-disc ml-8">
          <li>Correo electrónico: grpzaragoza@gmail.com</li>
          <li>Teléfono: +34 611 611 611</li>
          <li>Dirección: Calle Mayor, 12, Zaragoza, España</li>
        </ul>
      </div>

      <p>Fecha de vigencia: 28 de marzo de 2024</p>
    </>
  );
}
