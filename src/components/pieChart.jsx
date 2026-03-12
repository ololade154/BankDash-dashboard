import { useState } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';

// Sample data
const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;

// Label inside slices
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  if (cx == null || cy == null || innerRadius == null || outerRadius == null) {
    return null;
  }

  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;

  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
      className="text-xs"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

// Custom slice to push slices outward
const MyCustomPie = (props) => {
  const { index, cx, cy, midAngle } = props;

  // Different push-out distances
  const sliceOffsets = [20, 10, 5, 0];
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
    <>
      <div className="w-full bg-white rounded-xl p-4 focus:outline-none">
        {/* Responsive chart height */}
        <div className="w-full h-50 md:h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                labelLine={false}
                label={renderCustomizedLabel}
                shape={MyCustomPie}
                paddingAngle={5}
                outerRadius="70%"
                activeIndex={activeIndex}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}
