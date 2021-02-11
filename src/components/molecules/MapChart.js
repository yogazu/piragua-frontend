import React from "react";
import * as d3 from "d3";
import Visualisation from "../CustomHooks/Visualisation"

 
class MapChart extends React.Component  {

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
    const {geoData} = this.state;
    return (
      <Visualisation geoData={geoData} />
    );
}
  
}

export default MapChart;
