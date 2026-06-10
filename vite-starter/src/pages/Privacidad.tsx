import { useEffect } from 'react'
import './Legal.css'

export default function Privacidad() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <main className="legal">
      <span className="legal__eyebrow">Legal</span>
      <h1 className="legal__title">Política de Privacidad</h1>
      <span className="legal__updated">Última actualización: junio de 2026</span>
      <hr className="legal__divider" />

      <div className="legal__body">

        <div className="legal__section">
          <h2>1. Responsable del tratamiento</h2>
          <ul>
            <li><strong>Razón social:</strong> Canarias Betón S.L.</li>
            <li><strong>CIF:</strong> B01939933</li>
            <li><strong>Domicilio:</strong> C. los Cactus 33, 35118 Agüimes, Las Palmas de Gran Canaria</li>
            <li><strong>Email:</strong> <a href="mailto:infocanariasbeton@gmail.com">infocanariasbeton@gmail.com</a></li>
            <li><strong>Teléfono:</strong> 608 89 03 99</li>
          </ul>
        </div>

        <div className="legal__section">
          <h2>2. Datos que recopilamos</h2>
          <p>Recopilamos los datos personales que usted nos facilita voluntariamente a través de los formularios del Sitio Web (nombre, teléfono, email, empresa, tipo de servicio y mensaje), así como datos de navegación obtenidos mediante cookies técnicas.</p>
          <p>No recopilamos datos especialmente protegidos ni datos de menores de 14 años.</p>
        </div>

        <div className="legal__section">
          <h2>3. Finalidad y base legitimadora</h2>
          <ul>
            <li><strong>Gestión de solicitudes de presupuesto y consultas:</strong> base legítima — ejecución de un contrato o medidas precontractuales (art. 6.1.b RGPD).</li>
            <li><strong>Envío de comunicaciones comerciales:</strong> base legítima — interés legítimo o consentimiento explícito del usuario (art. 6.1.a y 6.1.f RGPD).</li>
            <li><strong>Cumplimiento de obligaciones legales:</strong> base legítima — obligación legal (art. 6.1.c RGPD).</li>
          </ul>
        </div>

        <div className="legal__section">
          <h2>4. Conservación de los datos</h2>
          <p>Los datos se conservarán durante el tiempo necesario para la finalidad para la que fueron recabados y mientras no se solicite su supresión, y en todo caso durante los plazos legalmente establecidos según la normativa fiscal, mercantil y contractual aplicable.</p>
        </div>

        <div className="legal__section">
          <h2>5. Destinatarios y cesiones</h2>
          <p>Los datos no serán cedidos a terceros salvo obligación legal. Podemos utilizar proveedores de servicios tecnológicos (hosting, email) que actúan como encargados del tratamiento bajo acuerdo de confidencialidad y con las garantías exigidas por el RGPD.</p>
        </div>

        <div className="legal__section">
          <h2>6. Derechos del interesado</h2>
          <p>Puede ejercer en cualquier momento los siguientes derechos dirigiéndose a <a href="mailto:infocanariasbeton@gmail.com">infocanariasbeton@gmail.com</a>:</p>
          <ul>
            <li><strong>Acceso:</strong> conocer qué datos tratamos sobre usted.</li>
            <li><strong>Rectificación:</strong> corregir datos inexactos o incompletos.</li>
            <li><strong>Supresión:</strong> solicitar la eliminación de sus datos.</li>
            <li><strong>Oposición:</strong> oponerse al tratamiento de sus datos.</li>
            <li><strong>Limitación:</strong> solicitar la restricción del tratamiento.</li>
            <li><strong>Portabilidad:</strong> recibir sus datos en formato estructurado.</li>
          </ul>
          <p>Asimismo, tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>) si considera que el tratamiento no se ajusta a la normativa vigente.</p>
        </div>

        <div className="legal__section">
          <h2>7. Seguridad</h2>
          <p>Canarias Betón S.L. ha adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad de los datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado, habida cuenta del estado de la tecnología, la naturaleza de los datos y los riesgos a los que están expuestos.</p>
        </div>

        <div className="legal__section">
          <h2>8. Cambios en la política de privacidad</h2>
          <p>Canarias Betón S.L. se reserva el derecho a modificar la presente política para adaptarla a cambios legislativos o jurisprudenciales. Los cambios serán comunicados en esta misma página con indicación de la fecha de actualización.</p>
        </div>

      </div>
    </main>
  )
}
