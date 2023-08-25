
import { Column } from "@ant-design/plots";
import { useState,useEffect } from "react";
function Appointments() {
    const [columnData, setColumnData] = useState([]);
    
    useEffect(() => {
        asyncFetch();
      }, []);
      const asyncFetch = () => {
        Promise.all([
          fetch(
            "https://gw.alipayobjects.com/os/antfincdn/8elHX%26irfq/stack-column-data.json"
          )
            .then((response) => response.json())
            .then((json) => setColumnData(json))
            .catch((error) => {
              console.log("fetch data failed", error);
            }),
        ]);
      };
      const columnConfig = {
        data: columnData,
        isStack: true,
        xField: "year",
        yField: "value",
        seriesField: "type",
        legend: { layout: "horizontal", position: "top" },
        label: {
          position: "middle", // 'top', 'bottom', 'middle'
        },
        interactions: [
          {
            type: "active-region",
            enable: false,
          },
        ],
        connectedArea: {
          style: (oldStyle, element) => {
            return {
              fill: "rgba(0,0,0,0.25)",
              stroke: oldStyle.fill,
              lineWidth: 0.5,
            };
          },
        },
      };
return(<>
<Column {...columnConfig} />
</>)
}
export default Appointments;
