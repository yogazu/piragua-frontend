import React from "react"
import { Stage }  from "../molecules/Stage"
import { ZoomContainer }  from "../atoms/ZoomContainer"
import {  geoPath } from "d3-geo";
import * as d3 from "d3";


const DrawMap = ({data,mercator,indicador}) =>{

    if (!data) return <></>;
    
    const randonKey = Math.round(Math.random()*10)

    const onClick = (evt, d)=> {
       console.log("entro")
    }

    var tooltip = d3.select('.tooltip-area')
        .style('opacity', 0);
    
    return (

        <svg key={randonKey.toString()} width="584" height="421">
            <g>
            { data.map((feature, index) => {
                
                const [x, y] = mercator(feature.properties.centroide.coordinates)
                    return (
                        <>
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
                                key={index}
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
                                    className = "labels"
                                    value = {feature.properties.nombre}
                                    x={x}
                                    y={y}
                                    font-size = "9pt">
                                    {feature.properties.nombre}
                                </text>  
                            }
                        </>
                    );
                })
            }
            </g>
        </svg>

    )
}

export default DrawMap


