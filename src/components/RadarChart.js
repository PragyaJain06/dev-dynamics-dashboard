import React from 'react';
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip, Legend } from 'recharts';

const ActivityRadarChart = ({ data }) => {
  // Transforming data to fit RadarChart requirements
  let modifiedData = data.map((item) => {
    return { label: item.label, count: parseInt(item.count), fillColor: item.fillColor };
  });

  if (data.length > 0) {
    return (
      <RadarChart
        cx={300}
        cy={150}
        outerRadius={120}
        width={600}
        height={300}
        data={modifiedData}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="label" />
        <PolarRadiusAxis />
        <Tooltip />
        <Legend />
        <Radar
          name="Activity Count"
          dataKey="count"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
    );
  }
};

export default ActivityRadarChart;
