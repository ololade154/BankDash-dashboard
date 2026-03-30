import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

const renderLegend = (props) => {
  const { payload } = props;
  return (
    <div style={{ display: "flex", justifyContent: "flex-end", gap: 25 }}>
      {payload.map((entry) => {
        const color =
          entry.value === "Deposit"
            ? "#1814F3"
            : entry.value === "Withdraw"
              ? "#FF82AC"
              : entry.color;
        return (
          <div
            key={entry.value}
            style={{ display: "flex", alignItems: "center", gap: 8 }}
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
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const data = [
    { name: "Sat", deposit: 498, withdraw: 250 },
    { name: "Sun", deposit: 350, withdraw: 110 },
    { name: "Mon", deposit: 348, withdraw: 298 },
    { name: "Tue", deposit: 498, withdraw: 398 },
    { name: "Wed", deposit: 170, withdraw: 220 },
    { name: "Thu", deposit: 405, withdraw: 270 },
    { name: "Fri", deposit: 400, withdraw: 320 },
  ];

  return (
    <>
      <div
        style={{
          width: "100%",
          height: isMobile ? 250 : 350,
          backgroundColor: "white",
          padding: isMobile ? "10px 6px 0px 6px" : "15px 8px 0px 8px",
          borderRadius: 25,
          outline: "none",
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
                fill: "#718EBF",
                fontSize: 12,
                fontFamily: "Inter",
                fontWeight: 400,
              }}
            />
            <YAxis
              domain={[0, 500]}
              ticks={[0, 100, 200, 300, 400, 500]}
              tick={{
                fill: "#718EBF",
                fontSize: 12,
                fontFamily: "Inter",
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

export const BarChartTwo = () => {
  const data = [
    { name: "Sat", debit: 498, credit: 250 },
    { name: "Sun", debit: 350, credit: 110 },
    { name: "Mon", debit: 348, credit: 298 },
    { name: "Tue", debit: 498, credit: 398 },
    { name: "Wed", debit: 170, credit: 220 },
    { name: "Thu", debit: 405, credit: 270 },
    { name: "Fri", debit: 400, credit: 320 },
  ];
  // Calculate totals
  const totalDebit = data.reduce((sum, item) => sum + item.debit, 0);
  const totalCredit = data.reduce((sum, item) => sum + item.credit, 0);

  const CustomLegend = () => (
    <div className="flex items-center justify-end md:gap-4 gap-2 ">
      <div className="flex items-center md:gap-2 gap-1">
        <span className="w-3 h-3 bg-[#1A16F3] rounded-sm"></span>
        <span className="md:text-[14px] text-[13px] text-[#718EBF]">Debit</span>
      </div>
      <div className="flex items-center md:gap-2 gap-1">
        <span className="w-3 h-3 rounded-sm bg-[rgb(252,170,11)]"></span>
        <span className="md:text-[14px] text-[13px] text-[#718EBF]">
          Credit
        </span>
      </div>
    </div>
  );

  return (
    <div className="w-full h-56 md:h-72 flex flex-col items-center overflow-x-auto bg-white p-4 md:p-6 pb-0 rounded-2xl">
      <div className="flex flex-col gap-y-1 md:flex-row items-start md:items-center md:justify-between w-full mb-4  ">
        {/* Left: totals summary */}
        <div className=" md:text-[14px] text-[13px] text-[#718EBF]">
          <span>
            <span className="font-medium text-[#333B69] ">
              ${totalDebit.toLocaleString()}
            </span>
            &nbsp;Debited &amp; &nbsp;
          </span>

          <span>
            <span className="font-medium text-[#333B69]">
              ${totalCredit.toLocaleString()}
            </span>
            &nbsp;Credited in this week
          </span>
        </div>

        {/* Right: legend */}
        <CustomLegend />
      </div>
      <div className=" w-full h-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            barCategoryGap="20%"
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          >
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#718EBF", fontSize: 12, fontWeight: 400 }}
            />
            <YAxis
              domain={[0, 500]}
              ticks={[0, 100, 200, 300, 400, 500]}
              hide
              axisLine={false}
              tickLine={false}
            />
            <Bar dataKey="debit" fill="#1A16F3" radius={[5, 5, 5, 5]} />
            <Bar dataKey="credit" fill="#FCAA0B" radius={[5, 5, 5, 5]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
