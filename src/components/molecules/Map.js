import React from "react";
import * as d3 from "d3";
import { geoEqualEarth, geoPath } from "d3-geo"

class Map extends React.Component {
    state = {
        x: this.props.x,
        y: this.props.y,
        rx: this.props.rx,
        ry: this.props.ry,
        initialZoom: this.props.zoom,
        zoom: this.props.zoom,
        geoData: this.props.geoData
    };

    static getDerivedStateFromProps(props, state) {
        let {x, y, rx, ry, zoom, initialZoom, geoData} = state;
        const {delta, rotate} = props;

        x = x || props.x;
        y = y || props.y;

        zoom = initialZoom - props.zoom / 10;
        if (rotate) {
            rx += delta.x;
            ry += delta.y;
        } else {
            x += delta.x;
            y += delta.y;
        }

        geoData =
            props.geoData.length !== geoData.length ? props.geoData : geoData;

        return {...state, geoData, zoom, x, y, rx, ry};
    }

    render() {
        const {x, y, rx, ry, zoom, geoData} = this.state;
        
        const projection =  d3.geoMercator()
                .scale(10000)
                .center([-73.7, 6.7])
                .rotate([0,0])

        return (
            <g>
                {
                    (geoData.length == 1) ?
                        geoData[0].map((d,i) => (
                            <path
                                key={ `path-${ i }` }
                                d={geoPath().projection(projection)(d) }
                                className="municipios"
                                fill= {d.properties.color}
                                stroke="#FFFFFF"
                                strokeWidth={ 0.6}
                                text="prueba"
                            />
                        ))
                    :
                    <path></path>     
                }
            </g>
        )
    }
}

export default Map;
