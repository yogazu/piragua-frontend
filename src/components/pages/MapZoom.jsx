import React from "react";
import * as d3 from "d3";
import { Stage }  from "../molecules/Stage"
import { ZoomContainer }  from "../atoms/ZoomContainer"
import { geoMercator, geoPath } from "d3-geo";
 
class MapZoom extends React.Component  {

    state = {
      geoData: []
    };
      
    constructor(props) {
          super(props);
          this.loadData();
    
    }

    loadData = () => {
        Promise.all([
          d3.json(
              "https://piragua.s3.amazonaws.com/territorial_cm.geojson"
          )
        ]).then(([municipios]) => {
            this.setState({
              geoData: [
                municipios.features
                
              ]
            });
      });
    };
  
  render() {
    const mercator = d3.geoMercator()
                .scale(9000)
                .center([-73.8, 6.6]) ;
    const {geoData} = this.state;
    return (
        <Stage width="100%" height="100%">
        <ZoomContainer>
        {(geoData.length == 1) ?
                geoData[0].map((feature, index) => {
                    return (
                    <path
                        key={index}
                        d={geoPath().projection(mercator)(feature) }
                        fill= {feature.properties.color}
                        stroke="#FFFFFF"
                        strokeWidth={ 0.5}
                    />
                    );
                })
            :
                <path></path>     
            }
          
        </ZoomContainer>
      </Stage>
    );
}
  
}

export default MapZoom;
