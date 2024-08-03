import React from "react";
import { RadialBarChart, RadialBar, Legend, Tooltip, Cell } from "recharts";
import b from "../utils/sampleData.json";

function ActivityRadialChart({ data }) {
  console.log(data, "data");
  let colors = b.data.AuthorWorklog.activityMeta;

  if (data.length > 0) {
    return (
      <div style={{ textAlign: "center" }}>
        <RadialBarChart
          width={450}
          height={300}
          cx={275}
          cy={135}
          innerRadius={20}
          outerRadius={140}
          barSize={10}
          data={data}
        >
          <RadialBar
            minAngle={15}
            label={{ position: "insideStart", fill: "#fff" }}
            background
            clockWise
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length].fillColor}
              />
            ))}
          </RadialBar>
          {/* <Legend
            iconSize={10}
            width={120}
            height={140}
            layout="vertical"
            verticalAlign="middle"
            align="right"
          /> */}
          <Tooltip />
        </RadialBarChart>
      </div>
    );
  }
}

export default ActivityRadialChart;
