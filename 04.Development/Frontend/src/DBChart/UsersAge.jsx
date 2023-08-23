import { Pie } from "@ant-design/plots";



function UsersAge() {
    const ageData = [
        {
          type: "40+",
          value: 25,
        },
        {
          type: "31-40",
          value: 18,
        },
        {
          type: "0-10",
          value: 15,
        },
        {
          type: "11-20",
          value: 10,
        },
        {
          type: "21-30",
          value: 5,
        },
      ];
      const ageConfig = {
        appendPadding: 10,
        data: ageData,
        angleField: "value",
        colorField: "type",
        radius: 1,
        legend: { layout: "horizontal", position: "top" },
        startAngle: Math.PI,
        endAngle: Math.PI * 1.5,
        label: {
          type: "inner",
          offset: "-8%",
          content: "{name}",
          style: {
            fontSize: 12,
          },
        },
        interactions: [
          {
            type: "element-active",
          },
        ],
        pieStyle: {
          lineWidth: 0,
        },
      };

    return ( <>
            <Pie {...ageConfig} />
    
    </> );
}

export default UsersAge;