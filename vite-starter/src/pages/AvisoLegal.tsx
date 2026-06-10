import { useEffect } from 'react'
import './Legal.css'

export default function AvisoLegal() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <main className="legal">
      <span className="legal__eyebrow">Legal</span>
      <h1 className="legal__title">Aviso Legal</h1>
      <span className="legal__updated">Última actualización: junio de 2026</span>
      <hr className="legal__divider" />

      <div className="legal__body">

        <div className="legal__section">
          <h2>1. Datos identificativos del titular</h2>
          <p>En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de los datos del titular de este sitio web:</p>
          <ul>
            <li><strong>Razón social:</strong> Canarias Betón S.L.</li>
            <li><strong>CIF:</strong> B01939933</li>
            <li><strong>Domicilio social:</strong> C. los Cactus 33, 35118 Agüimes, Las Palmas de Gran Canaria</li>
            <li><strong>Instalaciones:</strong> C. Suiza nº 4, P.I. Maípez, Jinámar – Telde – Las Palmas</li>
            <li><strong>Teléfono:</strong> 608 89 03 99</li>
            <li><strong>Email:</strong> <a href="mailto:infocanariasbeton@gmail.com">infocanariasbeton@gmail.com</a></li>
            <li><strong>Actividad:</strong> Fabricación y distribución de hormigón preparado, áridos y morteros</li>
          </ul>
        </div>

        <div className="legal__section">
          <h2>2. Objeto y ámbito de aplicación</h2>
          <p>El presente aviso legal regula el acceso y uso del sitio web de Canarias Betón S.L. (en adelante, "el Sitio Web"). El acceso al Sitio Web implica la aceptación plena y sin reservas de las presentes condiciones.</p>
          <p>Canarias Betón S.L. se reserva el derecho a modificar, en cualquier momento y sin previo aviso, la presentación, configuración y contenidos del Sitio Web, así como las condiciones requeridas para su acceso y uso.</p>
        </div>

        <div className="legal__section">
          <h2>3. Propiedad intelectual e industrial</h2>
          <p>Todos los contenidos del Sitio Web —incluyendo textos, fotografías, gráficos, logotipos, iconos, imágenes, código fuente y diseño— son propiedad de Canarias Betón S.L. o de sus legítimos titulares, y están protegidos por la legislación española e internacional en materia de propiedad intelectual e industrial.</p>
          <p>Queda expresamente prohibida la reproducción, distribución, comunicación pública o transformación de cualquier elemento del Sitio Web sin la autorización previa y por escrito de Canarias Betón S.L.</p>
        </div>

        <div className="legal__section">
          <h2>4. Responsabilidad</h2>
          <p>Canarias Betón S.L. no garantiza la ausencia de errores en los contenidos del Sitio Web ni su actualización permanente, aunque realizará los esfuerzos razonables para evitarlos y corregirlos.</p>
          <p>Canarias Betón S.L. no será responsable de los daños o perjuicios que pudieran derivarse del uso del Sitio Web, de la imposibilidad de acceso al mismo o de la presencia de virus o programas lesivos en los contenidos.</p>
        </div>

        <div className="legal__section">
          <h2>5. Enlaces a terceros</h2>
          <p>El Sitio Web puede contener enlaces a páginas de terceros. Canarias Betón S.L. no asume ninguna responsabilidad sobre el contenido, informaciones o servicios que aparezcan en dichos sitios, que tendrán exclusivamente carácter informativo.</p>
        </div>

        <div className="legal__section">
          <h2>6. Legislación aplicable y jurisdicción</h2>
          <p>Las presentes condiciones se rigen por la legislación española. Para la resolución de cualquier controversia derivada del acceso o uso del Sitio Web, las partes se someten a los Juzgados y Tribunales de Las Palmas de Gran Canaria, con renuncia expresa a cualquier otro fuero que pudiera corresponderles.</p>
        </div>

      </div>
    </main>
  )
}
