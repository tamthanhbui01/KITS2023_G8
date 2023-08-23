import { Pie } from "@ant-design/plots";

function UsersGender() {
    const genderData = [
        {
          Gender: "Male",
          Proportion: 0.45,
        },
        {
          Gender: "Female",
          Proportion: 0.55,
        },
      ];
      const genderConfig = {
        appendPadding: 10,
        data: genderData,
        angleField: "Proportion",
        colorField: "Gender",
        radius: 0.8,
        legend:{ layout: "horizontal", position: "top",},
        label: {
          content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
          type: "inner",
          offset: "-50%",
          style: {
            fill: "#ffffff",
            fontSize: 18,
            textAlign: "center",
          },
        },
        interactions: [
          {
            type: "element-single-selected",
          },
        ],
      };
    return (  <>
    <Pie {...genderConfig} />
    </>);
}

export default UsersGender;