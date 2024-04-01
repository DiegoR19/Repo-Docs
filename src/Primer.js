//import Lista from './Components/Lista';
import * as React from 'react';
//import {BrowserRouter, Routes, Route} from "react-router-dom"

function Primer() {
    
    return (
        <div class="container mt-5 rem w-100">
        <div class="row">
            <div class="col-4">
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseZero" aria-expanded="false" aria-controls="collapseZero">
                    <strong>Home</strong>
                    </button>
                </h2>
                <div id="collapseZero" class="accordion-collapse collapse" aria-labelledby="headingZero" data-bs-parent="#accordionExample">

                </div>
                </div>
            </div>      
        </div>
    </div>
    </div>
    );
  }
  
  export default Primer;