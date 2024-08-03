import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';

const ActivityAreaChart = ({ data, date }) => {
  let modifiedData = data.map((item) => {
    return { ...item, count: parseInt(item.count), dates: date };
  });

  if (data.length > 0) {
    return (
      <AreaChart
        width={600}
        height={300}
        data={modifiedData}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="label" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="count"
          stroke="#8884d8"
          fillOpacity={0.3}
          fill="#8884d8"
        />
      </AreaChart>
    );
  } 
};

export default ActivityAreaChart;
