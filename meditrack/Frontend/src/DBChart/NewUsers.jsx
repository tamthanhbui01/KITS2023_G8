import { Area } from "@ant-design/plots";
import { useState,useEffect } from "react";
function NewUsers() {
  const [data, setData] = useState([]);
  const config = {
    data: data,
    xField: "timePeriod",
    yField: "value",
    xAxis: {
      range: [0, 1],
    },
    color: "blue",
    areaStyle: () => {
      return {
        fill: "l(270) 0:#ffffff 0.5:#336cfb",
      };
    },
  };
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    Promise.all([
      fetch(
        "https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json"
      )
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => {
          console.log("fetch data failed", error);
        }),
      
    ]);
  };
  return (
    <>
      <Area {...config} />
    </>
  );
}

export default NewUsers;
