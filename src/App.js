import { Fragment } from "react";
import React from "react";
import "./styles/styles.scss";
import Piragua from './Piragua'


const App = () => (
  <Fragment>
  <div className="main-banner img-container l-section" id="main-banner">
  <div className="ed-grid lg-grid-6">
    <div className="lg-cols-4 lg-x-2">
      <img className="main-banner__img" alt = "banner"  src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=60" />
      <div className="main-banner__data s-center">
        <p className="t2 s-mb-0">Proyecto Piragua</p>
        <p> Informes</p>
        <a href="https://ed.team/" className="button">Ingresar</a>
      </div>
    </div>
  </div>
</div>
<div className="ed-grid m-grid-3">
 <Piragua />
 <Piragua />
 <Piragua />
 <Piragua />
 <Piragua />
 <Piragua />

</div>
</Fragment>

)

export default App;
