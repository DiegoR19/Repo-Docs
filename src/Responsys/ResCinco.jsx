import * as React from 'react';

function ResCinco() {
    return (
      <div className="Primer mb-5">
        <div className="container">
                <p className="m-t 4">Last edited on: <strong>25/03/2024</strong></p>
                <p className="h1 fw-bold">Responsys - Creación de una Campaña</p>
                <hr />
                <p >Una vez terminada la plantilla de email, es necesario crear una campaña nueva para lanzar este mail. Para ello, es necesario hacer lo siguiente.</p>
                <ul>
                    <li><p>Ir al menú <strong>Campaign/Manage Campaigns.</strong></p></li>
                    <li><p>Esto nos posicionará en la página de gestión de campañas, vamos a repetir el proceso de copiar un elemento y editarlo, tal como hicimos con la plantilla de email.</p></li>
                    <li><p>Se recomienda colocar el nombre de la campaña igual al de la plantilla de email, al final añadiendo la zona a la que va dirigido (NAC o INC - solo aplica para México). De este modo, se mantiene una organización y será simple en un futuro encontrar lo necesario.</p></li>
                    <li><p>Una vez copiada y renombrada la campaña, dar clic en el botón <strong>(...)</strong> y luego en el menú <strong>Editar.</strong></p></li>
                </ul>
                <div className='bg-light p-2 mb-2'>
                    <p className="fw-bold">[año-mes-día] - [Andrea (PAÍS)] - [Camp] - [Estrellas (SEGMENTO)] [Semana] [Nombre de la campaña]</p>
                    <p className="fw-bold">ej: 2024-03-19 - Andrea MEX - Camp - Estrellas NAC Sem12 OUTLET MAS</p>
                </div>
            <p>En el apartado de Email Message se incluyen los parámetros más importantes respecto al mensaje que enviaremos en la campaña:</p>
            <ul>
                <li><p>Editar mensaje de correo:</p></li>
                <li><p>Link Tracking: </p></li>
                <li><p>Targeting</p></li>
            </ul>

            <p>Concluidos estos ajustes, es necesario elegir la audiencia a la que se enviará este contenido. Para ello, hay que entrar al apartado de Targeting. </p>
            <ul>
                <li><p>Editar mensaje de correo: </p>
                    <ul>
                      <li>Editar 1.1</li>
                    </ul></li>
                <li><p>Link Tracking: </p></li>
                <li><p>Targeting</p></li>
            </ul>
        </div>
      </div>
    );
  }
  
  export default ResCinco;