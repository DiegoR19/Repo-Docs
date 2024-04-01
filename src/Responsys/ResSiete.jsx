import * as React from 'react';
import image1 from '../img/filtro_1.png';
import image2 from '../img/filtro_2.png';

function ResSiete() {
    return (
      <div className="Primer mb-5">
        <div className="container">
          <p className="m-t 4">Last edited on: <strong>25/03/2024</strong></p>
          <p className="h1 fw-bold">Responsys - Creación de Filtros</p>
          <hr />
          <p>Para crear un nuevo filtro, hay que buscar en el panel lateral la opción de <strong>Audiences/Filters.</strong> Esto te lleva a la página de Manage Filters. Aquí se tiene una opción de <strong>Create Filter.</strong></p>
          <img src={image1} alt="" className='w-75 mb-4'/>
          <p>Esta ventana emergente te muestra dos opciones</p>
          <ul>
            <li><p>Profile List: Este punto permite elegir a partir de qué lista de contactos se creará el filtro. Para usos prácticos, siempre se utilizará la lista llamada <strong>Resp_Retail_Customers.</strong></p></li>
            <li><p>Filter Type: En esta opción puede elegirse qué tipo de filtro se hará, basándose en la lista anteriormente elegida. Para cuestiones de mailing y segmentación de estrellas, siempre se utiliza <strong>Profile.</strong></p></li>
          </ul>
          <img src={image2} alt="" className='w-75 mb-4'/>
          <p>Una vez en esta sección, ya se puede crear el filtro haciendo uso de condiciones como <strong>AND y OR</strong>.</p>
          <p>Además, del lado izquierdo, se muestra una columna donde vienen características sobre las cuales se pueden crear los filtros. Las opciones más funcionales para segmentaciones son: <strong>General y ESTRELLAS MX - USA.</strong> En esas pestañas se pueden encontrar información clave como:</p>
          <ul>
            <li><p>Apellido</p></li>
            <li><p>City</p></li>
            <li><p>Email_Adress</p></li>
            <li><p>CVE_Sucursal</p></li>
            <li><p>Zona</p></li>
          </ul>
          <p>Ya que el filtro esté terminado, solo hay que guardarlo, en este punto le puedes agregar nombre y una descripción en caso que sea necesario. Ya hecho esto, se le pude dar en la opción <strong>Contar</strong>, para tener una visión clara de cuántos contactos se agregan al filtro.</p>
        </div>
      </div>
    );
  }
  
  export default ResSiete;