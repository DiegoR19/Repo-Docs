import * as React from 'react';
import image1 from '../img/2_1.png'
import image2 from '../img/2_2.png'

function ResDos() {
    return (
      <div className="Primer mb-5">
        <div className="container">
          <p className=" m-t 4">Last edited on: <strong>22/03/2024</strong></p>
          <p className="h1 fw-bold">Responsys - Carga de Materiales</p>
          <hr />
          <p>Para cargar algún recurso de imagen en Responsys es necesario cumplir con el requerimiento de tamaño por elemento <strong>(menos de 200 kb)</strong>. Entre más ligero sea el material, mejor. De sta forma se asegura una carga rápida cuando la conexión del usuario no sea la más adecuada.</p>
          <div className='bg-light p-2 mb-4'>
            <p className="fw-bold h5" >Carga de recursos menores a 200kb</p>
            <ul>
                <li><p>Ir al menú lateral a la dirección <strong className="fw-bold">Content/Content Library.</strong></p></li>
                <li><p>Esto te posicionará en el Gestor de Contenido.</p></li>
                <li><p>En este punto es importante tomar en cuenta la nomencaltura y estructura en la que se organizan los archivos. Para carpetas es <strong class="fw-bold">2024-Materiales/Sem10.</strong> Cada semana se crea una nueva carpeta para seguir el orden a la numeración que le corresponda.</p></li>
                <li><p>Una vez localizado/creado el espacio para los materiales, solo basta con dar clic en el botón superior lado derecho <strong className='fw-bold'>Upload</strong> y arrastrar los materiales previamente trabajados en diseño.</p>
                <img src={image1} alt="Carga de recursos menores a 200kb - 1" className='w-50'/></li>
            </ul>
          </div>
          <hr />
          <p>En algún momento es posible que se requiera de cargar elementos con un peso mayor a 200kb. En este caso, el proceso es diferente, debido principalmente a que dichos elementos deben alojarse en el servidor de Responsys. En otras palabras, la forma de acceder a estos elementos al momento de armar la plantilla de email para la campaña, es mediante un link de la dirección de este elemento alojado.</p>
          <div className='bg-light p-2'>
            <p className="fw-bold h5" >Carga de recursos mayores a 200kb</p>
            <ul>
                <li><p>Ir al menú lateral a la dirección <strong className="fw-bold">Content/Hosted Content.</strong></p></li>
                <li><p>Esto te posicionará en el Gestor de Contenido Alojado. En esta sección podrás observar una lista que contiene todos los elementos alojados con sus respectiva url.</p>
                <img src={image2} alt="Carga de recursos mayores a 200kb - 2" className='w-50'/></li>
                <li><p>Dar clic al botón <strong className="fw-bold">Upload.</strong> Esto abrirá la interfaz de carga de archivos. A continuación, arrastrar o clic en seleccionar archivo, para elegirlo directamente del directorio local.</p></li>
                <li><p>Ya seleccionado el contenido deseado, dar clic en aceptar. Esto nos lleva de nuevo al inicio, donde nuestro elemento recien cargado ya se encuentra en la lista. Sin embargo, su estatus aparece como "No publicado". Para cambiar esto, solo hay que seleccionarlo y dar clic en <strong className='fw-bold'>Publish.</strong> De esta forma, el estatus cambia a "publicado",  con esto, ya podemos copiar el link generado y utilizar el elemento dentro de nuestra plantilla.</p></li>
                <li><p>Una vez dentro del editor de plantillas, se agrega un elemento de tipo "código". Dentro de este, se agrega un tag html para una imagen. Dentro de este, en el apartado "src" se pega el link de nuestro elemento alojado, y listo.</p></li>
            </ul>
          </div>

          {/*<p class="fw-light bg-success bg-opacity-10" >Hola</p>*/}
        </div>
      </div>
    );
  }
  
  export default ResDos;