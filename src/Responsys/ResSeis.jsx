import * as React from 'react';

function ResSeis() {
    return (
      <div className="Primer mb-5">
        <div className="container">
            <p className="m-t 4">Last edited on: <strong>25/03/2024</strong></p>
            <p className="h1 fw-bold">Responsys - Lanzamiento de una Campaña</p>
            <hr />
            <p >Una vez terminada la plantilla de email, es necesario crear una campaña nueva para lanzar este mail. Para ello, es necesario hacer lo siguiente.</p>
            <ul>
                <li><p>Ir al menú <strong>Campaign/Manage Campaigns.</strong></p></li>
                <li><p>Esto nos posicionará en la página de gestión de campañas, vamos a repetir el proceso de copiar un elemento y editarlo, tal como hicimos con la plantilla de email.</p></li>
                <li><p>Se recomienda colocar el nombre de la campaña igual al de la plantilla de email, al final añadiendo la zona a la que va dirijido (solo aplica para México). De este modo, se mantiene una organización y será simple en un futuro encontrar lo necesario.</p></li>
                <li><p>Una vez copiada y renombrada la campaña, dar clic en el botón <strong>(...)</strong> y luego en el menú <strong>Editar.</strong></p></li>
            </ul>
        </div>
      </div>
    );
  }
  
  export default ResSeis;