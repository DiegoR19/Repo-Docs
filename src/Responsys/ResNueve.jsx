import * as React from 'react';
import image1 from '../img/reporte_1.png';
import image2 from '../img/reporte_2.png';

function ResNueve() {
    return (
      <div className="Primer mb-5">
        <div className="container">
          <p className="m-t 4">Last edited on: <strong>27/03/2024</strong></p>
          <p className="h1 fw-bold">Responsys - Generar reporte de performance</p>
          <hr />
          <p >Cada mes se realiza la solicitud de un compendio de estadísticas sobre las campañas lanzadas durante cierto periodo de tiempo, solicitado previamente a través de Asana.</p>
          <p>Para generar este reporte, hay que buscar en el panel lateral la opción de <strong>Insight/Interactive Dashboards.</strong> Seleccionando esta opción, se abre una nueva ventana de navegador con una interfaz diferente a la de Responsys.</p>
          <img src={image1} alt="" className='w-75 mb-4'/>
          <p>En el menú lateral, se encuentra una palabra resaltada en color naranja titulada <strong>Performance.</strong> Acá, se despliegan una serie de opciones sobre las que podemos generar un reporte interactivo. En este caso particular, nos interesa el punto de <strong>Campaign.</strong></p>
          <img src={image2} alt="" className='w-75 mb-4'/>
          <p>Una vez en este punto, se puede filtrar por:</p>
          <ul>
            <li><p>Marketing Strategy</p></li>
            <li><p>Marketing Program</p></li>
            <li><p>Marketing Purpose</p></li>
            <li><p>Program</p></li>
            <li><p>Campaign</p></li>
            <li><p>Sent Date Range</p></li>
          </ul>
          <p>Para uso practico, el punto que usamos para filtrar es el de <strong>Sent Date Range</strong> para seleccionar un rango de 7 días, 14 o el último mes, según sea el caso.</p>
          <p>Dando clic derecho sobre las columnas, se pueden añadir/eliminar columnas con contenido extra que puede complementar los reportes. Por lo regular, se utilizan las siguientes columnas:</p>
          <ul>
            <li><p>Campaign</p></li>
            <li><p>Sent</p></li>
            <li><p>Opens</p></li>
            <li><p>Clicks</p></li>
            <li><p>Open Rate</p></li>
            <li><p>Click-Through Rate</p></li>
          </ul>
          <p>Al fondo de la página, se encuentra un botón con la opción <strong>Export</strong>, en ella se puede elegir la opción de exportar a Excel, o algún otro formato de archivo, de acuerdo a lo que se necesite.</p>
        </div>
      </div>
    );
  }
  
  export default ResNueve;