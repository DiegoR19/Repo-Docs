import * as React from 'react';
import image1 from '../img/2_3.png'

function ResTres() {
    return (
      <div className="Primer mb-5">
        <div className="container">
        <p className="m-t 4">Last edited on: <strong>22/03/2024</strong></p>
          <p className="h1 fw-bold">Responsys - Creación de una nueva plantilla de email</p>
          <hr />
          <p >Una vez que cuentas con los recursos cargados en el directorio que corresponde, ya se puede iniciar con la creación/edición de la plantilla de email.</p>
          <p >Para iniciar será necesario tener la noción de la nomenclatura que se usa para las plantillas de email.</p>
          
          <div  className='bg-light p-2 mb-2'>
            <p className="fw-bold">año-mes-día - Andrea (PAÍS) - Mail - Estrellas (SEGMENTO) Semana Nombre de la campaña</p>
            <p className="fw-bold">ej: 2024-03-19 - Andrea MEX - Mail - Estrellas NAC Sem12 OUTLET MAS</p>
          </div>
          
          <p >Con en el ejemplo anterior en mente, escribe en el buscador de la barra superior derecha, la fecha aproximada que te interese para duplicar.</p>
          <p >Esto porque hay plantillas anteriores que puedes reutilizar y solo agregar los elementos nuevos que necesites. Si no es el caso, se recomienda buscar las plantillas más recientes, ya que son versiones que van al día con las modificaciones realizadas en meses anteriores.</p>

          <div className='row'>
            <div className='col-6'>
                <p >Tras iniciar la búsqueda, se muestra una lista con todos los resultados que coinciden con nuestra solicitud. En la parte izquierda contamos con un filtro para seleccionar qué resultados queremos ver/ignorar. La mayoría de las veces que utilicemos la búsqueda, será para encontrar plantillas de email, así que se sugiere marcar en el filtro que solo muestre los resultados para plantillas de email.</p>
            </div>
            <div className='col-6'>
                <img src={image1} alt="Carga de recursos menores a 200kb - 1" className='w-75'/>
            </div>
          </div>
          
          <p >Cuando se localice la plantilla deseada, se tienen varias opciones dando clic en los 3 puntos de esta en el lado derecho. Para motivos prácticos, solo nos interesa ahondar en dos:</p>
          <ul>
            <li><p><strong className="fw-bold">Copy: </strong>permite duplicar la plantilla, cambiando el nombre de la misma. A través de este proceso, obtenemos una nueva plantilla sin necesidad de crearla desde cero.</p></li>
            <li><p><strong className="fw-bold">Edit: </strong>En esta opción podemos editar el contenido de la plantilla, agregar contenido previamente cargado a la galería, actualizar o cambiar los links del mail, así como el nombre del mismo, además de una gran cantidad de opciones a modificar.</p></li>
          </ul>


        </div>
      </div>
    );
  }
  
  export default ResTres;