import React from "react"
import {  geoPath } from "d3-geo";
import * as d3 from "d3";


const DrawMap = ({data,mercator,indicador,width,height}) =>{

    if (!data) return <></>;
    
    const randonKey = Math.round(Math.random()*10)

    const onClick = (evt, d)=> {
       console.log("entro")
    }

    var tooltip = d3.select('.tooltip-area')
        .style('opacity', 0);
        
        console.log(width + " - " + height)
      
    return (

        <svg key={randonKey.toString() + "svg"} width={width} height={height}>
            <g key={randonKey.toString() + "g"}>
            { data.map((feature, index) => {
                
                const [x, y] = mercator(feature.properties.centroide.coordinates)
                    return (
                        <React.Fragment key={index}>
                            <path
                                key={index + feature.properties.nombre}
                                id={feature.properties.id}
                                d={geoPath().projection(mercator)(feature) }
                                fill= {feature.properties.territorial.color}
                                stroke="#FFFFFF"
                                strokeWidth={ 0.4}
                            >
                            </path>
                        { (indicador === "circulo") ?
                                <circle
                                key={index + "circle" }
                                cx={x}
                                cy={y}
                                r={0.2}
                                fill="red"
                                stroke="#000"
                                strokeWidth={7}
                                onClick={e => e.preventDefault()}
                                />
                            : 
                                <text
                                    key={index + "labels"}
                                    className = "labels"
                                    value = {feature.properties.nombre}
                                    x={x}
                                    y={y}
                                    fontSize = "9pt">
                                    {feature.properties.nombre}
                                </text>  
                            }
                         </React.Fragment>
                    );
                })
            }
            </g>
        </svg>

    )
}

export default DrawMap


