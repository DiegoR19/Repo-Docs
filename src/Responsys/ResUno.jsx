import * as React from 'react';
import image1 from '../img/0_1.png'

function ResUno() {
    return (
      <div className="Primer">
        <div className="container">
          <p className="fw-light m-t 4">Last edited on: <strong>20/03/2024</strong></p>
          <p className="h1 fw-bold">Responsys - Acceso</p>
          <hr />
          <p>Para ingresar a Oracle Responsys será necesario tener una cuenta y acceder a su página de login. <a href="https://fch1qwt.responsys.ocs.oraclecloud.com/authentication/login/LoginPage" className='fw-bold color-primary'>Oracle Sign In</a></p>

          <div>
            <img src={image1} alt="" className='w-75'/>
          </div>
        </div>
      </div>
    );
  }
  
  export default ResUno;