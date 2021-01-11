import React from "react";
import "../../styles/styles.scss";

const Banner = () => (

    <div className="main-banner img-container l-section" id="main-banner">
    <div className="ed-grid lg-grid-6">
      <div className="lg-cols-4 lg-x-2">
        <img className="main-banner__img" alt = "banner"  src="https://images.pexels.com/photos/265614/pexels-photo-265614.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb" />
        <div className="main-banner__data s-center">
          <p className="t2 s-mb-0">Proyecto Piragua</p>
          <p> Informes</p>
          <a href="https://ed.team/" className="button">Ingresar</a>
        </div>
      </div>
    </div>
  </div>

)


export default Banner
