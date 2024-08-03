import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';
const ActivityLineChart = ({ data ,date}) => {
let modifiedData=data.map((item)=>{
    return {...item,count:parseInt(item.count), dates:date}
})
if(data.length>0){
    return (
        <LineChart width={600} height={300} data={modifiedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Legend />
          {data.map((item, index) => (
            <Line
              key={item.label}
              type="monotone"
              dataKey="count"
              stroke={item.fillColor}
            />
          ))}
        </LineChart>
      );
    };
}
   

    
   
  
  
  export default ActivityLineChart