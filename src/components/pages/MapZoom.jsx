import React from "react"
import * as d3 from "d3";
import DrawMap from "../atoms/DrawMap";
import {connect } from "react-redux"
 
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
          d3.json
          ("https://piragua.s3.amazonaws.com/municipio0.json")
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
      const territorio = geoData[0] && geoData[0].filter(u => u.properties.territorial.nombre === this.props.nombreTerritorio)
      const mercator = d3.geoMercator()
                  .scale(9000)
                  .center([-73.8, 6.6]) ;
      console.log(geoData[0])

    return (
         (territorio !== undefined && territorio.length > 0) ?
            <DrawMap data={territorio}  mercator={mercator}></DrawMap>
          :
            <DrawMap data={geoData[0]}  mercator={mercator}></DrawMap>
        
    );
  }
}

const mapStateToProps = state => ({
  nombreTerritorio: state.rootActTerritorio.nombreTerritorio
})

const mapDispatchToProps = () => ({})
export default  connect(mapStateToProps,mapDispatchToProps) (MapZoom);
