import React from 'react'
import CustomToolTip from './CustomToolTip';
import CustomLegend from './CustomLegend';
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts";

const CustomPieChart = ({
    data,
    label,
    totalAmount,
    colors,
    showTextAnchor,
}) => {
  return (
    <div className="relative" style={{ width: '100%', height: '380px' }}>
      <ResponsiveContainer width="100%" height={380}>
        <PieChart>
          <Pie
            data={data}
            dataKey="amount"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={130}
            innerRadius={100}
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip content={CustomToolTip}/>
          <Legend content={CustomLegend}/>
        </PieChart>
      </ResponsiveContainer>
      
      {/* Overlay div for center text */}
      {showTextAnchor && (
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <div className="text-sm text-gray-500">{label}</div>
          <div className="text-2xl font-semibold text-gray-800">{totalAmount}</div>
        </div>
      )}
    </div>
  );
};

export default CustomPieChart;