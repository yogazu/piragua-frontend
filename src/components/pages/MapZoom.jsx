import React from "react"
import * as d3 from "d3";
import DrawMap from "../atoms/DrawMap";
import {connect } from "react-redux"
import {  geoPath } from "d3-geo";
 
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
      
      let centroide = [-74.8, 6.9]
      const width= 584 
      const height= 421
      let  datafilter
      let marca = ""

      let mercator = d3.geoMercator()
                  .center(centroide) 
                  .translate([width/2, height/2]);

      if (geoData !== undefined && geoData.length > 0) {  
             datafilter  = geoData[0] && geoData[0].filter(u =>  u.properties.uuid === this.props.municipioActual)
          if (datafilter !== undefined && datafilter.length > 0) {
              centroide = [datafilter[0].properties.centroide.coordinates[0],
                          datafilter[0].properties.centroide.coordinates[1]]
          }else{
            datafilter = geoData[0] && geoData[0].filter(u =>  u.properties.territorial.uuid === this.props.territorioActual)
            if (datafilter !== undefined && datafilter.length > 0) {
              centroide = [datafilter[0].properties.territorial.centroide.coordinates[0],
                          datafilter[0].properties.territorial.centroide.coordinates[1]]
            }else {
              datafilter = geoData[0].slice();
              marca = "circulo"
            }            
          } 
          mercator.center(centroide)
          mercator.fitSize([width,height],{type:"FeatureCollection", features: datafilter})
      }

    return (
            <DrawMap data={datafilter}  mercator={mercator} indicador={marca}></DrawMap>
    );
  }
}

const mapStateToProps = state => ({
  territorioActual: state.rootActTerritorio.territorioActual,
  municipioActual : state.rootActTerritorio.municipioActual

})

const mapDispatchToProps = () => ({})
export default  connect(mapStateToProps,mapDispatchToProps) (MapZoom);
