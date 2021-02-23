import React from "react"
import { Stage }  from "../molecules/Stage"
import { ZoomContainer }  from "../atoms/ZoomContainer"
import {  geoPath } from "d3-geo";

const DrawMap = ({data,mercator}) =>{

    if (!data) return <></>;
    return (
        <Stage  width="100%" height='100%'   >
            <ZoomContainer>
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
                            
                            <circle
                                    key={index}
                                    cx={feature.properties.centroide.coordinates[0]}
                                    cy={feature.properties.centroide.coordinates[1]}
                                    r={10}
                                    fill="red"
                                    stroke="#000"
                                    strokeWidth={0.1}
                                    onClick={() => console.log(feature.properties.nombre)}
                            />
                            <text  className="tooltip"  dx={ -75.70823819790733}
                                    dy={6.032462270070983} className="heavy"></text>
                        </>
                    );
                  })
                }
            </ZoomContainer>
        </Stage>
    )
}

export default DrawMap