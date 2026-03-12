import { useState, useEffect } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const renderLegend = (props) => {
  const { payload } = props;
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 25 }}>
      {payload.map((entry) => {
        const color =
          entry.value === 'Deposit'
            ? '#1814F3'
            : entry.value === 'Withdraw'
              ? '#FF82AC'
              : entry.color;
        return (
          <div
            key={entry.value}
            style={{ display: 'flex', alignItems: 'center', gap: 8 }}
            className="text-[13px] inter-font font-normal bar-text-color"
          >
            <div
              style={{
                width: 12,
                height: 12,
                backgroundColor: color,
                borderRadius: 50,
              }}
            ></div>
            <span>{entry.value}</span>
          </div>
        );
      })}
    </div>
  );
};

export const MyBarChart = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const data = [
    { name: 'Sat', deposit: 498, withdraw: 250 },
    { name: 'Sun', deposit: 350, withdraw: 110 },
    { name: 'Mon', deposit: 348, withdraw: 298 },
    { name: 'Tue', deposit: 498, withdraw: 398 },
    { name: 'Wed', deposit: 170, withdraw: 220 },
    { name: 'Thu', deposit: 405, withdraw: 270 },
    { name: 'Fri', deposit: 400, withdraw: 320 },
  ];

  return (
    <>
      <style>{`
        .recharts-wrapper, 
        .recharts-wrapper:focus, 
        .recharts-wrapper:focus-visible,
        .recharts-surface, 
        .recharts-surface:focus,
        .recharts-surface:focus-visible {
          outline: none;
          box-shadow: none ;
        }
      `}</style>
      <div
        style={{
          width: '100%',
          height: isMobile ? 250 : 350,
          backgroundColor: 'white',
          padding: isMobile ? '10px 6px 0px 6px' : '15px 8px 0px 8px',
          borderRadius: 25,
          outline: 'none',
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={
              isMobile
                ? { top: 10, right: 5, left: -20, bottom: 20 }
                : { top: 20, right: 20, left: 0, bottom: 20 }
            }
            barCategoryGap="20%"
            barGap={4}
          >
            <CartesianGrid
              vertical={false}
              horizontal={true}
              stroke="#F3F3F5"
              strokeWidth={1}
            />
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
            <YAxis
              domain={[0, 500]}
              ticks={[0, 100, 200, 300, 400, 500]}
              tick={{
                fill: '#718EBF',
                fontSize: 12,
                fontFamily: 'Inter',
                fontWeight: 400,
              }}
              axisLine={false}
              tickLine={false}
            />
            <Legend
              content={renderLegend}
              verticalAlign="top"
              align="right"
              wrapperStyle={{ marginTop: isMobile ? -10 : -20 }}
            />
            <Bar
              dataKey="deposit"
              name="Deposit"
              fill="#1814F3"
              radius={[10, 10, 10, 10]}
              barSize={isMobile ? 6 : 12}
              isAnimationActive={false}
              activeShape={false}
              onClick={null}
            />
            <Bar
              dataKey="withdraw"
              name="Withdraw"
              fill="#16DBCC"
              radius={[10, 10, 10, 10]}
              barSize={isMobile ? 6 : 12}
              isAnimationActive={false}
              activeShape={false}
              onClick={null}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};
