import React from "react";
import * as d3 from "d3";


const margin = 75;
const width = 1200 - margin;
const height = 650 - margin;

class TerritoriosMap extends React.Component {

  componentDidMount() {
    const { data } = this.props;
    if (!data) return <></>;
    const  svg = d3.select('svg')
    .attr('width', width)
    .attr('height', height);

    // Add background
    svg.append('rect')
        .attr('class', 'background')
        .attr('width', width)
        .attr('height', height)
        ;
    
    var g = svg.append('g');


    const projection = d3
      .geoMercator()
      .scale(130)
      .translate([width / 2, height / 1.4]);

    const path = d3.geoPath().projection(projection);
    
    const map = svg
      .selectAll("path")
      .data(data.feature)
      .enter()
      .append("path")
      .attr("d", path)
      .style("fill", "rgb(9, 157, 217)")
      .style("stroke", "black")
      .style("stroke-width", 0.5);

      

    }

    
    
    render() {
      const { data } = this.props;
      const styles = {
        container: {
          display: "grid",
          justifyItems: "center"
        }
     };
return (
         <div ref="chart" style={styles.container}>
           <p style={{ textAlign: "center" }}>Historical FIFA world cup geo map with React and D3.
           </p>
         </div>
        );
      }
     }

export default TerritoriosMap;