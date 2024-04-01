import * as React from 'react';

import Home from './Components/Home'

import SmCero from './SM/Cero';
import SmUno from './SM/Uno';

import ResCero from './Responsys/ResCero';
import ResUno from './Responsys/ResUno';
import ResDos from './Responsys/ResDos';
import ResTres from './Responsys/ResTres';
import ResCuatro from './Responsys/ResCuatro';
import ResCinco from './Responsys/ResCinco';
import ResSeis from './Responsys/ResSeis';
import ResSiete from './Responsys/ResSiete';
import ResOcho from './Responsys/ResOcho';
import ResNueve from './Responsys/ResNueve';

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Generator from './Components/List_Generator_Sm';
import Generator_Res from './Components/List_Gen_Responsys';
import Generator_Push from './Components/List_Gen_Push';

//De acá se obtienen la lista de opciones de cada plataforma
var lista = Generator();
var lista_2 = Generator_Res();
var lista_3 = Generator_Push();

//Funcion para generar la lista de SalesManago
    function Sales(){
        const listItems = lista.map(lisItem => <li className="list-group-item"><nav><Link to={lisItem.link} className="text-decoration-none fw-bold text-dark">{lisItem.name}</Link></nav></li>);
    return <ul className="list-group list-group-flush">{listItems}</ul>
    };
//Funcion para generar la lista de Responsys
    function Res(){
        const listItems = lista_2.map(lisItem => <li className="list-group-item"><nav><Link to={lisItem.link} className="text-decoration-none fw-bold text-dark">{lisItem.name}</Link></nav></li>);
    return <ul className="list-group list-group-flush">{listItems}</ul>
    }
//Funcion para generar la lista de PushWoosh
    function Push(){
        const listItems = lista_3.map(lisItem => <li className="list-group-item"><nav><Link to={lisItem.link} className="text-decoration-none fw-bold text-dark">{lisItem.name}</Link></nav></li>);
    return <ul className="list-group list-group-flush">{listItems}</ul>
    }

function Inicio() {
//Acá regresa toda la estructura principal
    return (
      <div className="Primer">
        <BrowserRouter>
        <div className="Header w-100 fixed-top">
        <div className="container">
            <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <Link to={"/"} className="text-decoration-none fw-bold text-dark"><strong>Andrea Content Analyst</strong></Link>
            </div>
            </nav>
        </div>
      </div>
        <div className="container mt-5 rem w-100 ">
            <div className="row ">
                    <div className="col-4">
                    <div className="accordion accordion-flush" id="accordionFlush">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                <strong>SalesManago</strong>
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlush">
                                <div className="accordion-body">
                                    <Sales/>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                <strong>Responsys</strong>
                            </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlush">
                                <div className="accordion-body">
                                    <Res/>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                <strong>Pushwoosh</strong>
                            </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlush">
                            <div className="accordion-body">
                                <Push/>
                            </div>
                            </div>
                        </div>
                    </div>
                        
                    </div>
                    <div className="col-8">
                    {/*Cada ruta debe estar señalada acá, para que funcione correctamente. no usar href*/}
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/SM/Cero" element={<SmCero/>}/>
                        <Route path="/SM/Uno" element={<SmUno/>}/>

                        <Route path="/Responsys/ResCero" element={<ResCero/>}/>
                        <Route path="/Responsys/ResUno" element={<ResUno/>}/>
                        <Route path="/Responsys/ResDos" element={<ResDos/>}/>
                        <Route path="/Responsys/ResTres" element={<ResTres/>}/>
                        <Route path="/Responsys/ResCuatro" element={<ResCuatro/>}/>
                        <Route path="/Responsys/ResCinco" element={<ResCinco/>} />
                        <Route path="/Responsys/ResSeis" element={<ResSeis/>} />
                        <Route path="/Responsys/ResSiete" element={<ResSiete/>} />
                        <Route path="/Responsys/ResOcho" element={<ResOcho/>} />
                        <Route path="/Responsys/ResNueve" element={<ResNueve/>} />

                    </Routes>
                    </div>
                
            </div>
        </div>
        </BrowserRouter>
    </div>
    );
  }
  
  export default Inicio;