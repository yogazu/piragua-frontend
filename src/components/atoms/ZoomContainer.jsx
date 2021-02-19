import * as d3 from "d3";
import React, { useEffect, useState } from "react";
import { useSvg } from "../molecules/Stage";

export function ZoomContainer({ children }) {
    
  const svgElement = useSvg();
  const [{ x, y, k }, setTransform] = useState({ x: 0, y: 0, k: 1 });
  console.log(x  )
  console.log( y )
  console.log( k )

  useEffect(() => {
   
    if (!svgElement) return;
    const selection = d3.select(svgElement);
   
    const zoom = d3.zoom().on("zoom", function() {
      setTransform( d3.zoomTransform(selection.node()));

    });
   
    selection.call(zoom);
    return () => selection.on(".zoom", null);
  }, [svgElement]);
  
  console.log(children)
  return <g  transform={`translate(${x}, ${y}) scale(${k})`}>{children}</g>;
}