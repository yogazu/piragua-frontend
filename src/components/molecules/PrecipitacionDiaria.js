import React, { Component } from 'react';
import * as d3 from 'd3';
import chroma from 'chroma-js';

const width = 350;
const height = 230;
const margin = {top: 20, right: 13, bottom: 50, left: 40};
const red = '#eb6a5b';
const blue = '#52b6ca';
const green = '#b6e86f';
const colors = chroma.scale([blue, green, red]).mode('hsl');

class PrecipitacionDiaria extends Component {
  state = {
    bars: [], // array of rects
    // d3 helpers
    xScale: d3.scaleTime().range([margin.left, width - margin.right]),
    yScale: d3.scaleLinear().range([height - margin.bottom, margin.top]),
    colorScale: d3.scaleLinear(),
    
  };

  xAxis = d3.axisBottom().scale(this.state.xScale)
    .tickFormat(d3.timeFormat('%H'));
  yAxis = d3.axisLeft().scale(this.state.yScale)
    .tickFormat(d => `${d}mm`);

  static getDerivedStateFromProps(nextProps, prevState) {
    if (!nextProps.data) return null; // data hasn't been loaded yet so do nothing
    const {data} = nextProps;
    const {xScale, yScale, colorScale} = prevState;

    // data has changed, so recalculate scale domains
    const timeMax = d3.max(data, d => d.date);
    const timeMin= d3.min(data, d => d.date);
    console.log(data)
   
    const tempMax = d3.max(data, d => d.high);
   
    const colorDomain = d3.extent(data, d => d.avg);
    console.log(timeMin)
    
    
    xScale.domain([timeMin,timeMax]);
    yScale.domain([0, tempMax]);
    colorScale.domain(colorDomain);



    // calculate x and y for each rectangle
    const bars = data.map(d => {
      const y1 = yScale(d.high);
      
      console.log(y1)
      return {
        x: xScale(d.date),
        y: y1,
        height: (height - margin.bottom)  - y1 ,
        fill: colors(colorScale(d.avg)),
      }
    });

    return {bars};
  }

  componentDidUpdate() {
    d3.select(this.refs.xAxis).call(this.xAxis);
    d3.select(this.refs.yAxis).call(this.yAxis);
  }

  render() {

    return (
      <svg width={width} height={height}>
        {this.state.bars.map((d, i) =>
          (<rect key={i} x={d.x} y={d.y} width='10' height={d.height} fill={d.fill} />))}
        <g>
          <g ref='xAxis' transform={`translate(0, ${height - margin.bottom})`} />
          <g ref='yAxis' transform={`translate(${margin.left}, 0)`} />
        </g>
      </svg>
    );
  }
}

export default PrecipitacionDiaria;
