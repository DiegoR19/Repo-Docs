import * as React from 'react';

function Cero() {
  //var lastModified = document.lastModified;
  //var currentDate = new Date().toDateString();

    return (
      <div className="Primer">
        <div class="container">
          {/* Después de cada modificación, agregar la fecha
          <p class="h5 fw-light m-t 4">Edited on: <strong>{lastModified}</strong></p>*/}
          
          <p class="h5 fw-light m-t 4">Last edited on: <strong>15/03/2024</strong></p>
          <p class="h1 fw-bold">SalesManago</p>
          <p class="h4 fw-light">SALESmanago was founded back in 2012 because I believed there was a better way to empower marketing teams. I had already been a Marketer for over 10 years when an idea that would change the industry came to me.</p>
        </div>
      </div>
    );
  }
  
  export default Cero;