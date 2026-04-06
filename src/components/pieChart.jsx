import { useState } from "react";
import { PieChart, Pie, Sector, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Entertainment", value: 30, percent: 30 },
  { name: "Investment", value: 20, percent: 20 },
  { name: "Others", value: 35, percent: 35 },
  { name: "Bill Expense", value: 15, percent: 15 },
];

const COLORS = ["#343C6A", "#FA00FF", "#1814F3", "#FC7900"];

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

export function BankDonutChart() {
  const rawData = [
    { name: "ABM Bank", value: 300, fill: "#16DBCC", outerRadius: 90 },
    { name: "BRC Bank", value: 320, fill: "#F06292", outerRadius: 65 },
    { name: "DBL Bank", value: 300, fill: "#FFC64D", outerRadius: 72 },
    { name: "MCP Bank", value: 250, fill: "#4C78FF", outerRadius: 80 },
  ];

  const total = rawData.reduce((sum, d) => sum + d.value, 0);

  const dataWithAngles = rawData.reduce((acc, entry, i) => {
    const startAngle = i === 0 ? 0 : acc[i - 1].endAngle;
    const endAngle = startAngle + (entry.value / total) * 360;
    acc.push({ ...entry, startAngle, endAngle });
    return acc;
  }, []);

  const renderLegend = ({ payload }) => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 16,
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "8px 40px",
          padding: "0 4px",
        }}
      >
        {payload.map((entry) => (
          <span
            key={entry.value}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontSize: 13,
              color: "#888",
            }}
          >
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: entry.color,
                flexShrink: 0,
              }}
            />
            {entry.value}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <div className="w-full bg-white rounded-xl md:p-4 p-2">
      <ResponsiveContainer width="100%" aspect={1}>
        <PieChart>
          {dataWithAngles.map((entry) => (
            <Pie
              key={entry.name}
              data={[{ ...entry }]}
              innerRadius="35%"
              outerRadius={entry.outerRadius}
              startAngle={90 - entry.startAngle}
              endAngle={90 - entry.endAngle}
              paddingAngle={0}
              dataKey="value"
              strokeWidth={0}
              stroke="transparent"
              legendType="circle"
            />
          ))}
          <Legend
            content={renderLegend}
            wrapperStyle={{ width: "100%", left: 0 }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
