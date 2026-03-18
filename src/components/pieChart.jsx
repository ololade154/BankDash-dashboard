import { useState } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Entertainment', value: 30, percent: 30 },
  { name: 'Investment', value: 20, percent: 20 },
  { name: 'Others', value: 35, percent: 35 },
  { name: 'Bill Expense', value: 15, percent: 15 },
];

const COLORS = ['#343C6A', '#FA00FF', '#1814F3', '#FC7900'];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  payload,
}) => {
  if (cx == null || cy == null || innerRadius == null || outerRadius == null) {
    return null;
  }

  const radius = innerRadius + (outerRadius - innerRadius) * 0.7;

  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      className="text-[10px] md:text-[14px]"
    >
      {/* Percentage */}
      <tspan x={x} dy="-0.3em" fontWeight="bold">
        {payload.percent}%
      </tspan>

      {/* Name */}
      <tspan x={x} dy="1.2em">
        {payload.name}
      </tspan>
    </text>
  );
};

const MyCustomPie = (props) => {
  const { index, cx, cy, midAngle } = props;

  const sliceOffsets = [0, 0, 0, 0];
  const offset = sliceOffsets[index] || 0;

  const x = cx + offset * Math.cos(-midAngle * RADIAN);
  const y = cy + offset * Math.sin(-midAngle * RADIAN);

  return (
    <Sector {...props} cx={x} cy={y} fill={COLORS[index % COLORS.length]} />
  );
};

export default function MyPieChart() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="w-full bg-white rounded-xl p-4">
      <div className="w-full h-50 md:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              labelLine={false}
              label={renderCustomizedLabel}
              shape={MyCustomPie}
              outerRadius="90%"
              activeIndex={activeIndex}
              paddingAngle={5}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
