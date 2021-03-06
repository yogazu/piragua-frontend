import React from "react";
import * as d3 from "d3";


const margin = 75;
const width = 1200 - margin;
const height = 650 - margin;

class TerritoriosMap extends React.Component {

  componentDidMount() {
    const { data } = this.props;
    if (!data) return <></>;
    


    const zoom = d3.zoom()
      .scaleExtent([1, 8])
      .on("zoom", zoomed);

    const svg = d3.create("svg")
      .attr("viewBox", [0, 0, width, height])
      .on("click", reset);

    const g = svg.append("g");

      

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