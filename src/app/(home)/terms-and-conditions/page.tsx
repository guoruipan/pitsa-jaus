import { Metadata } from 'next';

const pageTitle = 'Términos y condiciones';

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
          ¡Bienvenido a PitsaJaus! Agradecemos su preferencia por nuestras
          deliciosas pizzas. Para garantizar una experiencia agradable para
          todos los clientes, a continuación se detallan nuestros Términos y
          Condiciones:
        </p>
      </div>

      <div className="space-y-3 mb-16">
        <h2 className="text-center text-lg font-bold">1. Pedidos y Pagos:</h2>
        <ul className="list-disc">
          <li>
            Puede realizar su pedido a través de nuestro sitio web, aplicación
            móvil o llamando a nuestro teléfono +34 611 611 611.
          </li>
          <li>
            Los precios indicados en el menú en línea o en el local incluyen el
            Impuesto sobre el Valor Añadido (IVA) vigente.
          </li>
          <li>
            Aceptamos pagos con tarjeta de crédito/débito, efectivo y
            plataformas de pago electrónico (si aplica). El pago se realiza al
            momento de realizar el pedido (en línea o por teléfono) o al
            recibirlo en el local (para recogidas).
          </li>
          <li>
            PitsaJaus se reserva el derecho de modificar los precios del menú
            sin previo aviso.
          </li>
        </ul>
      </div>

      <div className="space-y-3 mb-16">
        <h2 className="text-center text-lg font-bold">
          2. Entregas y Recogidas:
        </h2>
        <ul className="list-disc">
          <li>
            El tiempo estimado de entrega a domicilio dependerá de la zona y la
            hora del pedido. Se le informará del tiempo estimado durante el
            proceso de pedido.
          </li>
          <li>
            Existe un monto mínimo de pedido para entregas a domicilio. Este
            monto se especificará en el momento de realizar el pedido.
          </li>
          <li>
            Para recogidas en el local, su pedido estará listo en el tiempo
            estimado que se le indique durante el pedido.
          </li>
          <li>
            PitsaJaus no se responsabiliza por retrasos en la entrega
            ocasionados por factores externos ajenos a nuestro control (clima,
            tráfico, etc.).
          </li>
        </ul>
      </div>

      <div className="space-y-3 mb-16">
        <h2 className="text-center text-lg font-bold">
          Promociones y Descuentos:
        </h2>
        <ul className="list-disc">
          <li>
            Las promociones y descuentos ofrecidos por PitsaJaus estarán sujetas
            a condiciones específicas que se detallarán en cada caso.
          </li>
          <li>
            Los cupones de descuento solo serán válidos por un tiempo
            determinado y bajo las condiciones indicadas en el cupón.
          </li>
          <li>
            No se podrán combinar cupones de descuento a menos que se indique
            expresamente lo contrario.
          </li>
        </ul>
      </div>

      <div className="space-y-3 mb-16">
        <h2 className="text-center text-lg font-bold">
          4. Política de Cancelaciones:
        </h2>
        <ul className="list-disc">
          <li>
            Los pedidos pueden ser cancelados sin costo alguno hasta 15 minutos
            después de haber sido realizados.
          </li>
          <li>
            Para pedidos cancelados con posterioridad a los 15 minutos, se
            aplicará un cargo por la elaboración del pedido.
          </li>
          <li>
            No se aceptan cancelaciones de pedidos una vez que se encuentren en
            camino hacia su domicilio.
          </li>
        </ul>
      </div>

      <div className="space-y-3 mb-16">
        <h2 className="text-center text-lg font-bold">5. Reembolsos:</h2>
        <ul className="list-disc">
          <li>
            En caso de recibir un pedido incorrecto o incompleto, PitsaJaus se
            compromete a enviarle el pedido correcto lo antes posible sin costo
            adicional.
          </li>
          <li>
            Si el cliente no desea esperar el reemplazo del pedido, se emitirá
            un reembolso completo del monto del pedido.
          </li>
          <li>
            Los reembolsos se realizarán a través del mismo método de pago
            utilizado para realizar el pedido.
          </li>
        </ul>
      </div>

      <div className="space-y-3 mb-16">
        <h2 className="text-center text-lg font-bold">
          6. Modificación de Términos y Condiciones:
        </h2>
        <ul className="list-disc">
          <li>
            PitsaJaus se reserva el derecho de modificar estos Términos y
            Condiciones en cualquier momento.
          </li>
          <li>
            Los cambios se publicarán en nuestra página web y entrarán en vigor
            a partir de la fecha de publicación.
          </li>
        </ul>
      </div>

      <div className="space-y-3 mb-16">
        <h2 className="text-center text-lg font-bold">
          7. Ley Aplicable y Jurisdicción:
        </h2>
        <ul className="list-disc">
          <li>
            Estos Términos y Condiciones se rigen e interpretan de acuerdo con
            las leyes de España.
          </li>
          <li>
            Cualquier controversia relacionada con estos Términos y Condiciones
            se someterá a la jurisdicción de los tribunales competentes de
            Zaragoza, España.
          </li>
        </ul>
      </div>

      <div className="space-y-3 mb-16">
        <h2 className="text-center text-lg font-bold">8. Contacto</h2>
        <p>
          Si tiene alguna pregunta sobre estos Términos y Condiciones, puede
          contactarnos a través de:
        </p>
        <ul className="list-disc">
          <li>Correo electrónico: grpzaragoza@gmail.com</li>
          <li>Teléfono: +34 611 611 611</li>
          <li>Dirección: Calle Mayor, 12, Zaragoza, España</li>
        </ul>
      </div>

      <p>Fecha de vigencia: 28 de marzo de 2024</p>
    </>
  );
}
