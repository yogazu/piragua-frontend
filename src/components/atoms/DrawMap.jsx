import React from "react"
import * as d3 from "d3";
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
                                fill= {feature.properties.color}
                                stroke="#FFFFFF"
                                strokeWidth={ 0.5}
                                text = {feature.properties.nombre}
                            >
                            </path>
                            <text   x={ -75.53233930508617}
                                    y={6.188007952992682} className="heavy"></text>
                        </>
                    );
                  })
                }
            </ZoomContainer>
        </Stage>
    )
}

export default DrawMap