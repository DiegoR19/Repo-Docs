import * as React from 'react';

function ResDiez() {
    return (
      <div className="Primer mb-5">
        <div class="container">
            <p class="m-t 4">Last edited on: <strong>11/04/2024</strong></p>
            <p class="h1 fw-bold">Responsys - Creación de UTMS</p>
            <hr />
            <p >A continuación, se define cada columna en el archivo de Excel. Encuentra el archivo <a target='_blank' rel='noreferrer noopener' href="https://grpandrea-my.sharepoint.com/:x:/g/personal/luis_diaz_grupoandrea_com/ESp0tfejbpdCsiLRRCMcs0oBUx5ullLtHl0YEoqchLSnNg?e=2Ko9Vr">aquí</a></p>
            <p>A continuación se describe la estructura del archivo.</p>
            <ul>
                <li><p><strong>Semana:</strong> aquí se registra durante qué semana se realiza la campaña.</p></li>
                <li><p><strong>Fecha:</strong> la fecha de envío (o el día en que se hizo la UTM). Esta decisión ya depende de quien la esté creando.</p></li>
                <li><p><strong>País: </strong>se define a qué país se envía la campaña.</p></li>
                <li><p><strong>Zona: </strong>este campo aplica sólo para México. Se puede elegir entre dos de las zonas principales para Estrellas en México, Nacional (NAC) O Incremento (INC). Cuando se trata de USA, simplemente se coloca <strong>N/A</strong></p></li>
                <li><p><strong>Medio: </strong>se refiere a la plataforma desde la que creamos la campaña. En este caso es Responsys.</p></li>
                <li><p><strong>URL: </strong>en este espacio se agrega el link proporcionado en Asana para cada sección.</p></li>
                <li><p><strong>Campaing source: </strong>este es un elemento visible en la URL final. Se utiliza para definir en el mismo link de qué plataforma proviene.</p></li>
                <li><p><strong>Campaign medium: </strong>el medio utilizado para enviar la campaña. Para este caso, es email.</p></li>
                <li><p><strong>Campaign name: </strong>también conocido como <strong>campaign</strong>, es un texto clave sin espacios donde se define información importante de identificación. Debe crearse uno para cada elemento de mail, es decir, cada botón y cada banner dentro del mail debe tener su propia variación, que parte de una base indicada en la tarea de Asana.</p>
                <p>i.e. <strong>amx_header_vacaciones_sem15 / aus_btn_outlet_vacaciones_sem15</strong></p></li>
                <li><p><strong>URL de destino: </strong> este espacio cuenta con una formula creada para unir las anteriores columnas en un solo link funcional. Algunas casillas están marcadas en color naranja, esto significa que utilizan una formula diferente a la de las casillas sin color. Esto permite hacer uso de link a páginas específicas de los catálogos, colecciones de productos, etc.</p></li>
            </ul>
        </div>
      </div>
    );
  }
  
  export default ResDiez;