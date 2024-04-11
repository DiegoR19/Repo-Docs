import * as React from 'react';

function ResSeis() {
    return (
      <div className="Primer mb-5">
        <div className="container">
            <p className="m-t 4">Last edited on: <strong>11/04/2024</strong></p>
            <p className="h1 fw-bold">Responsys - Lanzamiento de una Campaña</p>
            <hr />
            <p>El proceso de lanzamiento se divide en dos etapas.</p>
            <ul>
                <li><p>Lanzamiento de prueba</p></li>
                <li><p>Lanzamiento final</p></li>
            </ul>
            <p>Antes de enviar cualquier campaña, es necesario hacer un envío de prueba. La función principal es validar la correcta visualización de los elementos del mail, así como el buen funcionamiento de las UTM. Además, también puede ser un último filtro para cambiar algún copy, imagen o detectar errores, todo esto previo al lanzamiento oficial.</p>
            <p>En la ventana de la campaña, se da clic en el botón PROOF LAUNCH. Esto muestra una ventana emergente para el envío de prueba. Como buena práctica, debe crearse una lista de prueba donde se incluyen contactos que reciben los lanzamientos de prueba. Se puede crear una lista de prueba con un solo correo, con tu mismo correo institucional. Así te ahorras tiempo durante este envío.</p>
            <p>Una vez se le da en enviar, te llega después de unos segundos este correo. La vista de este mail es la misma que como se verá para el lanzamiento final, sin embargo, en el subject del mail se agrega de manera automática al inicio “Proof Launch (HTML-only)”. Con esto es sencillo diferenciar entre un lanzamiento de prueba y uno oficial. Ya que recibiste el mail de prueba, es necesario enviarlo a las personas responsables de validar. Para ello, es necesario reenviarlo a la siguiente dirección de correo:</p>
            <p><strong>AutorizacionesMailing@grupoandrea.com</strong></p>
            <p>Una vez validado, puedes continuar el proceso con el siguiente paso.</p>
            <p>Dentro de la campaña, validar que los filtros necesarios estén seleccionados y dar click en el botón de la esquina superior derecha LANZAR, el cual mostrará una ventana emergente desde la cual se configura fecha y hora de envío. </p>
          <p>Completado este apartado, es importante además definir un correo de notificación para cuando la campaña complete su lanzamiento o descubrir algún error en el lanzamiento. </p>
          <ul>
            <li><p>Progress notifications con tu correo institucional, marcado la opción de When messages sent on. Y en este menú seleccionar on launch completion.</p></li>
            <li><p>Failure notifcations to y agregar de nuevo el correo institucional.</p></li>
          </ul>
        </div>
      </div>
    );
  }
  
  export default ResSeis;