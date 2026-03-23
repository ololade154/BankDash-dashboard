import { useState } from 'react';
import { BarChart, Bar, XAxis, ResponsiveContainer, LabelList } from 'recharts';

const chartData = [
  { name: 'Aug', withdraw: 11000 },
  { name: 'Sep', withdraw: 13000 },
  { name: 'Oct', withdraw: 10000 },
  { name: 'Nov', withdraw: 9000 },
  { name: 'Dec', withdraw: 12500 },
  { name: 'Jan', withdraw: 5900 },
];

function AmountLabel({ x, y, width, value, activeIndex, index }) {
  if (activeIndex !== index) return null;
  const formatted = value.toLocaleString();
  return (
    <text
      x={x + width / 2}
      y={y - 6}
      textAnchor="middle"
      fill="#16a34a"
      fontSize={12}
      fontWeight={700}
    >
      ${formatted}
    </text>
  );
}

export const ExpenseChart = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div
      className="p-6 lato-font md:max-w-80 h-50 bg-white"
      style={{ borderRadius: '20px' }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          margin={{ top: 24, right: 0, left: 0, bottom: 0 }}
        >
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{
              fill: '#718EBF',
              fontSize: 12,
              fontFamily: 'Inter',
              fontWeight: 400,
            }}
          />

          <Bar
            dataKey="withdraw"
            fill="#EDF0F7"
            radius={[6, 6, 6, 6]}
            barSize={22}
            activeBar={{ fill: '#16DBCC' }}
            onMouseEnter={(_, index) => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <LabelList
              content={(props) => (
                <AmountLabel {...props} activeIndex={activeIndex} />
              )}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
