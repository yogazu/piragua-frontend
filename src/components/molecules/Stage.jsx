import React, { useEffect, useRef, useState } from "react"

let Context = React.createContext(null)

export function Stage({ width, height, children }) {
   Context = React.createContext(null)
  const svgRef = useRef(null)
  const [svg, setSvg] = useState(null)
  useEffect(() => setSvg(svgRef.current),)
  
  return (
    <svg ref={svgRef} width={width} height={height}>
      <Context.Provider value={svg}>{children}</Context.Provider>
    </svg>
  )
}

export function useSvg() {
  return React.useContext(Context)
}