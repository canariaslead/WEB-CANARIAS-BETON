import { useEffect } from 'react'
import './Legal.css'

export default function Terminos() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <main className="legal">
      <span className="legal__eyebrow">Legal</span>
      <h1 className="legal__title">Términos y Condiciones</h1>
      <span className="legal__updated">Última actualización: junio de 2026</span>
      <hr className="legal__divider" />

      <div className="legal__body">

        <div className="legal__section">
          <h2>1. Objeto</h2>
          <p>Las presentes condiciones generales regulan la relación contractual entre Canarias Betón S.L. (CIF B01939933, en adelante "Canarias Betón") y el cliente que solicite cualquiera de sus servicios: fabricación y suministro de hormigón preparado, áridos, morteros y servicio de bombeo.</p>
        </div>

        <div className="legal__section">
          <h2>2. Pedidos y confirmación</h2>
          <p>Todo pedido deberá realizarse con la antelación suficiente para garantizar la disponibilidad de producto y medios de transporte. La confirmación del pedido por parte de Canarias Betón —ya sea por teléfono, correo electrónico o cualquier otro medio— constituirá la aceptación del mismo.</p>
          <p>El cliente deberá indicar en el momento del pedido: tipo y dosificación del hormigón, volumen requerido, dirección de entrega, fecha y hora prevista, y cualquier condición especial de acceso a la obra.</p>
        </div>

        <div className="legal__section">
          <h2>3. Precios y facturación</h2>
          <p>Los precios se facilitarán al cliente en el momento de la solicitud de presupuesto y serán los vigentes en la fecha de confirmación del pedido. Todos los precios se expresan en euros y llevan incluido el IVA correspondiente salvo indicación expresa en contrario.</p>
          <p>Canarias Betón se reserva el derecho a actualizar su tarifa de precios sin previo aviso, si bien los pedidos ya confirmados no se verán afectados por dichas modificaciones.</p>
        </div>

        <div className="legal__section">
          <h2>4. Condiciones de entrega</h2>
          <p>La entrega se realizará en el punto de descarga indicado por el cliente, siempre que el acceso sea seguro para los vehículos de Canarias Betón. El cliente es responsable de garantizar las condiciones de acceso y recepción del hormigón.</p>
          <p>El tiempo de descarga incluido en el servicio es de 30 minutos por cuba. Los tiempos de espera adicionales serán facturados según tarifa vigente.</p>
          <p>Canarias Betón no se responsabilizará de los retrasos ocasionados por causas ajenas a su control (fuerza mayor, tráfico, condiciones meteorológicas adversas, etc.).</p>
        </div>

        <div className="legal__section">
          <h2>5. Calidad del producto</h2>
          <p>Todo el hormigón fabricado por Canarias Betón cumple con la normativa española EHE-08 y está sometido a control de calidad en laboratorio propio. Se emitirá albarán de entrega con los datos de identificación de cada amasada.</p>
          <p>Las reclamaciones por calidad del producto deberán realizarse en el momento de la entrega o, como máximo, dentro de las 24 horas siguientes, adjuntando el albarán correspondiente.</p>
        </div>

        <div className="legal__section">
          <h2>6. Pago</h2>
          <p>Las condiciones de pago se acordarán entre las partes en el momento de establecer la relación comercial. En ausencia de acuerdo expreso, el pago será al contado en el momento de la entrega. El impago en los plazos acordados devengará los intereses de demora legalmente establecidos.</p>
        </div>

        <div className="legal__section">
          <h2>7. Responsabilidad</h2>
          <p>La responsabilidad de Canarias Betón quedará limitada al valor del pedido objeto de reclamación. En ningún caso responderá por daños indirectos, lucro cesante o pérdidas de producción.</p>
          <p>El cliente será responsable del uso correcto del hormigón suministrado, incluyendo su puesta en obra, compactación y curado conforme a la normativa aplicable.</p>
        </div>

        <div className="legal__section">
          <h2>8. Protección de datos</h2>
          <p>Los datos personales facilitados en el marco de la relación comercial serán tratados conforme a lo establecido en la <a href="/privacidad">Política de Privacidad</a> de Canarias Betón S.L.</p>
        </div>

        <div className="legal__section">
          <h2>9. Legislación aplicable y fuero</h2>
          <p>Las presentes condiciones se rigen por la legislación española. Para la resolución de cualquier controversia, las partes se someten a los Juzgados y Tribunales de Las Palmas de Gran Canaria, con renuncia expresa a cualquier otro fuero.</p>
        </div>

        <div className="legal__section">
          <h2>Contacto</h2>
          <p>Para cualquier consulta relacionada con estos términos, puede contactarnos en:</p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:infocanariasbeton@gmail.com">infocanariasbeton@gmail.com</a></li>
            <li><strong>Teléfono:</strong> 608 89 03 99</li>
            <li><strong>Dirección:</strong> C. los Cactus 33, 35118 Agüimes, Las Palmas de Gran Canaria</li>
          </ul>
        </div>

      </div>
    </main>
  )
}
