import React from "react"
import { Stage }  from "../molecules/Stage"
import { ZoomContainer }  from "../atoms/ZoomContainer"
import {  geoPath } from "d3-geo";

const DrawMap = ({data,mercator,width, height}) =>{

    if (!data) return <></>;
    const randonKey = Math.round(Math.random()*10)
    console.log(randonKey)
    return (
        <svg key={randonKey.toString()} width="584" height="421">
            <g >
            { data.map((feature, index) => {
                    return (
                        <>
                            <path
                                key={index + feature.properties.nombre}
                                id={feature.properties.id}
                                d={geoPath().projection(mercator)(feature) }
                                fill= {feature.properties.territorial.color}
                                stroke="#FFFFFF"
                                strokeWidth={ 0.01}
                            >
                            </path>
                        </>
                    );
                  })
                }
                
            </g>;
        </svg>
    )
}

export default DrawMap