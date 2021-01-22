// https://observablehq.com/@john-guerra/spike-map-colombia@888
import define1 from "./e93997d5089d7165@2288.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["Colombia_departamentos_municipios_poblacion_deptos-topo.json",new URL("./files/34e70ebac6adcba639c5b666abac5f915bd8e1874017e17ac240f154b3c7440f8579b245f7597ea13db93b66794a4a41205a862a0f85911d922c1e9c109a5dff",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], function(md){return(
md`# Spike Map Colombia

Using data from the Colombian [DANE](https://geoportal.dane.gov.co/servicios/descarga-y-metadatos/visor-descarga-geovisores/) 

[ref](https://observablehq.com/@d3/spike-map)`
)});
  main.variable(observer("viewof spikeBy")).define("viewof spikeBy", ["select","mapData"], function(select,mapData){return(
select({
  options: Object.keys(mapData.objects.MGN_AMN_MPIOS.geometries[0].properties),
  value: "STP27_PERS",
  title: "Atributo a mostrar"
})
)});
  main.variable(observer("spikeBy")).define("spikeBy", ["Generators", "viewof spikeBy"], (G, _) => G.input(_));
  main.variable(observer("viewof chart")).define("viewof chart", ["spikeMapColombia"], function(spikeMapColombia){return(
spikeMapColombia()
)});
  main.variable(observer("chart")).define("chart", ["Generators", "viewof chart"], (G, _) => G.input(_));
  main.variable(observer()).define(["chart","data"], function(chart,data){return(
chart(data, false)
)});
  main.variable(observer("spikeMapColombia")).define("spikeMapColombia", ["d3","width","height","features","path","topojson","mapData","margin","h","updateScale","fmt","projection","color","mountain"], function(d3,width,height,features,path,topojson,mapData,margin,h,updateScale,fmt,projection,color,mountain){return(
(dataAsMap, options) => {
  const svg = d3
    .create("svg")
    .style("overflow", "visible")
    .attr("viewBox", [0, 0, width, height]);

  const gGeo = svg.append("g");
  gGeo
    .selectAll(".mcpio")
    .data(features.features)
    .join("path")
    .attr("class", "mcpio")
    .style("stroke", "#ddd")
    .style("stroke-width", 0.5)
    .style("fill", "none")
    .attr("d", d => path(d));

  gGeo
    .selectAll(".depto")
    .data(topojson.feature(mapData, mapData.objects.MGN_AMN_DPTOS).features)
    .join("path")
    .attr("class", "depto")
    .style("fill", "none")
    .style("stroke", "#aaa")
    .style("stroke-width", 0.5)
    .attr("d", d => path(d));

  const gMountains = svg.append("g");

  const gLegend = svg
    .append("g")
    .attr("class", "gLegend")
    .attr(
      "transform",
      `translate(${width - margin.right - margin.left - 150},${margin.top +
        150})`
    );

  gLegend
    .append("text")
    .attr("id", "legendTitle")
    .attr("y", 30)
    .attr("x", -6)
    .style("font-family", "sans-serif")
    .style("font-size", "10pt")
    .style("font-style", "italic");

  svg
    .append("text")
    .attr("class", "tooltip")
    .style("font-family", "sans-serif")
    .style("font-size", "12pt")
    .attr("transform", "translate(50, 50)")
    .call(text =>
      text
        .append("tspan")
        .attr("class", "tooltipName")
        .style("font-weight", "bolder")
        .attr("y", 0)
        .attr("x", 0)
        .text()
    )
    .call(text =>
      text
        .append("tspan")
        .attr("class", "tooltipValue")
        .style("font-size", "10pt")
        .style("font-style", "italic")
        .attr("y", 15)
        .attr("x", 0)
        .text()
    );

  const update = (dataAsMap, options) => {
    const {
      normalize = false,
      dynamicScale = true,
      duration = 250,
      sort = false,
      spikeHeight = 250,
      normalizeFactor = 1000000,
      legendTitle = "Título"
    } = options;

    // const svg = d3.select(svg);
    const before = new Date();
    console.log("dataAsMap", (new Date() - before) / 1000, dataAsMap);

    let notFound = [];
    features.features.forEach(d => {
      const value = dataAsMap.get(d.properties.MPIO_CDPMP);
      if (value === undefined) {
        notFound.push(d.properties.MPIO_CDPMP);
        d.value = undefined;
        return;
      }
      d.value =
        value / (normalize ? d.properties.STP27_PERS / normalizeFactor : 1);
    });
    if (notFound.length) {
      console.log("Municipios no encontrados", notFound);
    }
    console.log("features.value", (new Date() - before) / 1000);

    const dataExtent = d3.extent(features.features, d => d.value);
    const rangeLegend = d3.range(
      dataExtent[0],
      dataExtent[1] + Number.MIN_VALUE,
      (dataExtent[1] + Number.MIN_VALUE - dataExtent[0]) / 6
    );

    h.range([0, spikeHeight]);
    if (dynamicScale) {
      updateScale(dataExtent);
    }

    if (sort) {
      features.features = features.features.sort((a, b) =>
        sort === "descending" ? b.value - a.value : a.value - b.value
      );
      console.log("sorted ", (new Date() - before) / 1000);
    }

    const onMouseOver = function(evt, d) {
      const [x, y] = path.centroid(d);

      gMountains.selectAll(".mountain").style("stroke-opacity", 0.3);
      d3.select(this).style("stroke-opacity", 1);
      svg
        .select(".tooltip")
        .attr("transform", `translate(${x + 10}, ${y})`)
        .call(text =>
          text
            .select(".tooltipName")
            .text(`${d.properties.MPIO_CNMBR} ${d.properties.DPTO_CNMBR}`)
        )
        .call(text => text.select(".tooltipValue").text(fmt(d.value)));
    };

    const onMouseOut = function() {
      gMountains.selectAll(".mountain").style("stroke-opacity", 1);
      svg.selectAll(".tooltip tspan").text("");
    };

    gMountains
      .selectAll(".mountain")
      .data(
        features.features.filter(d => d.value !== undefined),
        d => d.properties.MPIO_CDPMP
      )
      .join("path")
      .attr("class", "mountain")
      .attr("transform", d => `translate(${projection(d3.geoCentroid(d))})`)
      .style("fill", "#eee")
      .style("fill-opacity", 0.9)
      .style("stroke", d => color(d.value))
      .style("stroke-width", 1)
      .on("mouseover", onMouseOver)
      .on("mouseout", onMouseOut)
      .transition()
      .duration(duration)
      .attr("d", d => mountain(d.value));

    gLegend.select("#legendTitle").text(legendTitle);
    gLegend
      .selectAll("g.legend")
      .data(rangeLegend)
      .join(enter =>
        enter
          .append("g")
          .attr("class", "legend")
          .call(g => {
            g.append("path");
            g.append("text");
          })
      )
      .attr("transform", (d, i) => `translate(${i * 25},0)`)
      .call(legend =>
        legend
          .select("path")
          .attr("class", "legendMountain")
          .style("fill", "#eee")
          .style("fill-opacity", 0.9)
          .style("stroke", d => color(d))
          .style("stroke-width", 0.7)
          .transition()
          .duration(duration)
          .attr("d", d => mountain(d))
      )
      .call(legend =>
        legend
          .select("text")
          .style("font-size", "6pt")
          .style("text-anchor", "middle")
          .style("font-family", "sans-serif")
          .attr("y", 10)
          .text(d => fmt(d))
      );
  }; // update

  svg.node().value = update;

  if (dataAsMap) update(dataAsMap, options);

  return svg.node();
}
)});
  main.variable(observer("updateScale")).define("updateScale", ["h","color"], function(h,color){return(
dataExtent => {
  const max = Math.abs(Math.max(...dataExtent));
  h.domain([0, Math.abs(dataExtent[1])]);
  color.domain([-max, max]);
}
)});
  main.variable(observer("data")).define("data", ["features","spikeBy","d3"], function(features,spikeBy,d3)
{
  const data = new Map(
    features.features.map(d => [d.properties.MPIO_CDPMP, d.properties[spikeBy]])
  );
  features.features = features.features.sort((a, b) =>
    d3.ascending(a.properties.STP27_PERS, b.properties.STP27_PERS)
  );
  return data;
}
);
  main.variable(observer()).define(["features"], function(features){return(
features.features.filter(d => d.properties.MPIO_CDPMP == "05059")
)});
  main.variable(observer("fmt")).define("fmt", ["d3"], function(d3){return(
d3.format(".2s")
)});
  main.variable(observer("h")).define("h", ["d3"], function(d3){return(
d3
  .scaleLinear()
  // .domain([0, dataExtent[1]])
  .range([0, 250])
  .nice()
)});
  main.variable(observer("color")).define("color", ["d3"], function(d3){return(
d3.scaleSequential(d3.interpolateYlOrRd)
)});
  main.variable(observer("mountain")).define("mountain", ["h"], function(h){return(
(d, mx = 5) => {
  return `M${-mx / 2},0 Q0,${-h(d)} ${mx / 2}, 0`;
}
)});
  main.variable(observer("path")).define("path", ["d3","projection"], function(d3,projection){return(
d3.geoPath().projection(projection)
)});
  main.variable(observer("projection")).define("projection", ["d3","margin","width","height","features"], function(d3,margin,width,height,features){return(
d3
  .geoAzimuthalEqualArea()
  .rotate([74 + 30 / 60, -38 - 50 / 60])
  .fitExtent(
    [[margin.left, margin.top], [width - margin.right, height - margin.bottom]],
    features
  )
)});
  main.variable(observer("margin")).define("margin", function(){return(
{ left: 20, right: 20, top: 20, bottom: 20 }
)});
  main.variable(observer("height")).define("height", function(){return(
600
)});
  main.variable(observer("line")).define("line", ["d3"], function(d3){return(
d3.line()
)});
  main.variable(observer("features")).define("features", ["topojson","mapData"], function(topojson,mapData)
{
  const features = topojson.feature(mapData, mapData.objects.MGN_AMN_MPIOS);
  features.features = features.features.sort(
    (a, b) => a.properties.STP27_PERS - b.properties.STP27_PERS
  );
  return features;
}
);
  main.variable(observer("mapData")).define("mapData", ["FileAttachment"], function(FileAttachment){return(
FileAttachment(
  "Colombia_departamentos_municipios_poblacion_deptos-topo.json"
).json()
)});
  main.variable(observer("d3")).define("d3", ["require"], function(require){return(
require("d3@6")
)});
  main.variable(observer("topojson")).define("topojson", ["require"], function(require){return(
require("topojson-client@3")
)});
  const child1 = runtime.module(define1);
  main.import("select", child1);
  return main;
}
