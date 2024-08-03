// import React from 'react'
// import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, Cell } from 'recharts';
// import b from "../utils/sampleData.json"
// function ActivityBarChart({data}) {
//     console.log(data)
//  let color= b.data.AuthorWorklog.activityMeta

//  if(data.length>0){
//     return (
//         <div>
//         <BarChart width={600} height={300} data={data} >
//             <CartesianGrid strokeDasharray="3 3" />
//             <YAxis type="number" />
//             <XAxis type="category" dataKey="name" />
//             <Tooltip />
//             <Legend />
//             <Bar dataKey="value" fill="#8884d8" barSize={60} />
//             {color.map((item)=><Cell key={item.label} dataKey={item.label} fill={item.fillColor}/>)}

//         </BarChart>
//     </div>
//       )
//  }

// }

// export default ActivityBarChart

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  Cell,
} from "recharts";
import TriangleBar from "./TriangleBar";
import b from "../utils/sampleData.json";

function ActivityBarChart({ data }) {
  const colors = b.data.AuthorWorklog.activityMeta;

  if (data.length > 0) {
    return (
      <div>
        <BarChart width={450} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey="value" shape={<TriangleBar />} barSize={60}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length].fillColor}
              />
            ))}
          </Bar>
        </BarChart>
      </div>
    );
  }
}

export default ActivityBarChart;
