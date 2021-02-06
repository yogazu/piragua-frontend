import React, {useMemo} from "react";
import * as d3 from "d3";

var width = 1000,
   height = 600;
        
function MapLayer({geoData, rx, ry, x, y, zoom, className,color}) {
   
    const projection =  d3.geoMercator()
                .scale(10000)
                .center([-76, 7])
                .rotate([0, 0])
  
  

    const path = d3.geoPath().projection(projection);
    return <path d={path(geoData)} className={className}  />;
}

export default MapLayer;


