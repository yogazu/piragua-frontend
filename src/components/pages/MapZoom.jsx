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
          ("http://api-piragua.solupyme.com/api/v1/municipio/geo-all")
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
      let mapZomm = 7900
      let centroide = [-74.8, 6.6]
      const width= 584 
      const height= 421

      let  datafilter  = geoData[0] && geoData[0].filter(u =>  u.properties.uuid === this.props.municipioActual)
      if (datafilter === undefined || datafilter.length === 0) {
         
        datafilter = geoData[0] && geoData[0].filter(u =>  u.properties.territorial.uuid === this.props.territorioActual)
        
         if (datafilter !== undefined && datafilter.length > 0) {
            mapZomm = 30000
            centroide = [datafilter[0].properties.territorial.centroide.coordinates[0],
                        datafilter[0].properties.territorial.centroide.coordinates[1]]
          }
      }else{
         mapZomm = 50000
         centroide = [datafilter[0].properties.centroide.coordinates[0],
                      datafilter[0].properties.centroide.coordinates[1]]
      } 
     
      let mercator = d3.geoMercator()
                  .scale(mapZomm)
                  .center(centroide) 
                  .translate([width/2, height/2]);

    return (
         (datafilter !== undefined && datafilter.length > 0) ?
            <DrawMap data={datafilter}  mercator={mercator} indicador="nombre" ></DrawMap>
          :
            <DrawMap data={geoData[0]}  mercator={mercator}  ></DrawMap>
        
    );
  }
}

const mapStateToProps = state => ({
  territorioActual: state.rootActTerritorio.territorioActual,
  municipioActual : state.rootActTerritorio.municipioActual

})

const mapDispatchToProps = () => ({})
export default  connect(mapStateToProps,mapDispatchToProps) (MapZoom);
