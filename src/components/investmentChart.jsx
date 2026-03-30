import {
  Line,
  LineChart,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";

export const InvestmentChartOne = () => {
  const data = [
    { name: "2016", uv: 0, pv: 5000 },
    { name: "2017", uv: 10000, pv: 21000 },
    { name: "2018", uv: 20000, pv: 17000 },
    { name: "2019", uv: 30000, pv: 38000 },
    { name: "2020", uv: 40000, pv: 20000 },
    { name: "2021", uv: 40000, pv: 30000 },
  ];
  return (
    <div className="w-full md:h-72 h-56 bg-white px-3 py-6 md:p-8  rounded-2xl ">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 5, bottom: 0, left: 0, right: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 11, fill: "#718EBF", fontWeight: 400 }}
            tickLine={false}
            axisLine={false}
            tickMargin={10}
            padding={{ left: 20, right: 20 }}
          />
          <YAxis
            dataKey="uv"
            domain={[0, 40000]}
            ticks={[0, 10000, 20000, 30000, 40000]}
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 11, fill: "#718EBF", fontWeight: 400 }}
            width={55}
            tickFormatter={(value) => `$${value.toLocaleString()}`}
          />
          <Line
            type="linear"
            dataKey="pv"
            stroke="#EDA10D"
            strokeWidth={2}
            dot={{
              r: 4,
              fill: "#fff",
              stroke: "#EDA10D",
              strokeWidth: 2,
            }}
            activeDot={{ stroke: "#EDA10D" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
export const InvestmentChartTwo = () => {
  const data = [
    { name: "2016", uv: 0, pv: 10000 },
    { name: "2017", uv: 10000, pv: 19000 },
    { name: "2018", uv: 20000, pv: 8000 },
    { name: "2019", uv: 30000, pv: 38000 },
    { name: "2020", uv: 40000, pv: 12000 },
    { name: "2021", uv: 40000, pv: 32000 },
  ];
  return (
    <div className="w-full md:h-72 h-56 bg-white px-3 py-6 md:p-8  rounded-2xl ">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 5, bottom: 0, left: 0, right: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 11, fill: "#718EBF", fontWeight: 400 }}
            tickLine={false}
            axisLine={false}
            tickMargin={10}
            padding={{ left: 20, right: 20 }}
          />
          <YAxis
            dataKey="uv"
            domain={[0, 40000]}
            ticks={[0, 10000, 20000, 30000, 40000]}
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 11, fill: "#718EBF", fontWeight: 400 }}
            width={55}
            tickFormatter={(value) => `$${value.toLocaleString()}`}
          />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#16DBCC"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
