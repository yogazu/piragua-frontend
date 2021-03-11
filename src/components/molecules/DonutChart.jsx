import React, { useState, useEffect } from "react";
import * as d3 from "d3";
import PieClass from "./PieClass";


// <DonutChart/>
const DonutChart = () => {
  const generateData = (value, length = 5) =>
    d3.range(length).map((item, index) => ({
      date: index,
      value: value === null || value === undefined ? Math.random() * 100 : value
    }));

const [data, setData] = useState(generateData(0));

const changeData = () => {
  setData(generateData());
};

useEffect(() => {
  setData(generateData());
}, [!data]);


  return (
    <div>
    <PieClass
      data={data}
      width={200}
      height={200}
      innerRadius={60}
      outerRadius={100}
    />
  </div>
  );
}

export default DonutChart