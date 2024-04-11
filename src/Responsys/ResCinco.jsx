import * as React from 'react';
import image1 from '../img/mail-edit-1.png';
import image2 from '../img/mail-edit-2.png';

function ResCinco() {
    return (
      <div className="Primer mb-5">
        <div className="container">
                <p className="m-t 4">Last edited on: <strong>11/04/2024</strong></p>
                <p className="h1 fw-bold">Responsys - Creación de una Campaña</p>
                <hr />
                <p >Una vez terminada la plantilla de email, es necesario crear una campaña nueva para lanzar este mail. Para ello, es necesario hacer lo siguiente.</p>
                <ul>
                    <li><p>Ir al menú <strong>Campaign/Manage Campaigns.</strong></p></li>
                    <li><p>Esto nos posicionará en la página de gestión de campañas, vamos a repetir el proceso de copiar un elemento y editarlo, tal como hicimos con la plantilla de email. Se duplica para ahorrar tiempo al momento de definir a quién va dirigida la campaña. Regularmente, este caso de uso aplica con las campañas de MX (NAC  e INC) y USA. Aunque puede funcionar sin problemas tratándose de segmentaciones que se repitan, para no buscar de nuevo cada filtro.</p></li>
                    <li><p>Se recomienda colocar el nombre de la campaña igual al de la plantilla de email, al final añadiendo la zona a la que va dirigido (NAC o INC - solo aplica para México). De este modo, se mantiene una organización y será simple en un futuro encontrar lo necesario.</p></li>
                    <li><p>Finalizado esto, basta con dar click sobre la campaña recien creada para acceder a sus ajustes.</p></li>
                </ul>
                <div className='bg-light p-2 mb-2'>
                    <p className="fw-bold">[año-mes-día] - [Andrea (PAÍS)] - [Camp] - [Estrellas (SEGMENTO)] [Semana] [Nombre de la campaña]</p>
                    <p className="fw-bold">ej: 2024-03-19 - Andrea MEX - Camp - Estrellas NAC Sem12 OUTLET MAS</p>
                </div>
            <p>En el apartado de Email Message se incluyen los parámetros más importantes respecto al mensaje que enviaremos en la campaña:</p>
            <ul>
                <li>
                  <p>Editar mensaje de correo: En esta opción se puede modificar el mensaje del correo, con la plantilla que creamos anteriormente. la opción para hacer este cambio, es a través de el ícono de lapiz.</p>
                  <img src={image1} alt="" className='w-50 pb-4 border border-dark'/>
                </li>
                <li className='pt-4'>
                  <p>Link Tracking: Esta opción es posible accceder mediante el botón <strong>More/Link Tracking.</strong> Esta opción permite dar seguimiento dentro de la plataforma todos los links. Así puede obtenerse la información sobre las métricas más importantes sobre el performance de la campaña, como el open rate, click-through-rate, etc.</p>
                  <div className='row pb-4'>
                    <div className='col-6'>
                      <img src={image2} alt="" className='w-100 border border-dark'/>
                    </div>
                    <div className='col-6'>
                      <p>En este menú se puede crear/actualizar una link table. Este elemento de Responsys almacena todos los links con los que cuenta la plantilla que se utiliza para la campaña.</p>
                      <p>Para crear una nueva tabla, debe eliminarse la que ya tiene la campaña. A un lado del nombre de esta tabla, un ícono de <strong>x</strong> la elimina y desde ahí, aparece la nueva opción para crear una nueva link table.</p>
                      <p>Una vez creada la tabla, se le puede cambiar nombres a cada link para tener una identificación más clara de cada uno.</p>
                    </div>
                  </div>
                </li>
            </ul>

            <p>Concluidos estos ajustes, Es cuestión de dar click en el botón <strong>Save</strong>, para guardar los cambios realizados y a continuación seleccionar la opción <strong>Back to Campaign.</strong></p>
            
            <div className='p-2 mb-4' style={{backgroundColor:'#c0f4c9'}}>
              <p className='text-dark'><strong>PRO-TIP: </strong> El tiempo que toma l aplataforma para guardar los cambios en la plantilla suele ser muy extenso, al menos en el primer guardado de cambios (aprox. 15-20 min.), por lo que se recomienda (para el primer guardado de cambios en el mensaje de la campaña) después de darle click al botón <strong>Save</strong>, recargar la página, de esta forma nos ahorramos el tiempo de espera extenso. Ya la siguiente vez que se guarden cambios, no habrá problema y lo hará sin tardar.</p>
            </div>
        </div>
      </div>
    );
  }
  
  export default ResCinco;