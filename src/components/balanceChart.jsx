import { useState, useEffect } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

export const BalanceChart = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const data = [
    { name: 'Jul', deposit: 120 },
    { name: 'Aug', deposit: 280 },
    { name: 'Sep', deposit: 450 },
    { name: 'Oct', deposit: 740 },
    { name: 'Nov', deposit: 200 },
    { name: 'Dec', deposit: 490 },
    { name: 'Jan', deposit: 590 },
  ];

  return (
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
        <AreaChart
          data={data}
          margin={
            isMobile
              ? { top: 10, right: 5, left: -20, bottom: 20 }
              : { top: 20, right: 20, left: 0, bottom: 20 }
          }
        >
          {/* Gradient */}
          <defs>
            <linearGradient id="balanceGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(45, 96, 255, 0.25)" />
              <stop offset="100%" stopColor="rgba(45, 96, 255, 0)" />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3 3 3"
            vertical={true}
            horizontal={true}
          />

          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={{ stroke: '#B0BFDE', strokeWidth: 2 }}
            tick={{
              fill: '#718EBF',
              fontSize: 12,
              fontFamily: 'Inter',
              fontWeight: 400,
            }}
          />

          <YAxis
            domain={[0, 800]}
            ticks={[0, 200, 400, 600, 800]}
            axisLine={false}
            tickLine={{ stroke: '#B0BFDE', strokeWidth: 2 }}
            tick={{
              fill: '#718EBF',
              fontSize: 12,
              fontFamily: 'Inter',
              fontWeight: 400,
            }}
          />

          <Area
            type="natural"
            dataKey="deposit"
            stroke="#1814F3"
            strokeWidth={3}
            fill="url(#balanceGradient)"
            dot={false}
            activeDot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
