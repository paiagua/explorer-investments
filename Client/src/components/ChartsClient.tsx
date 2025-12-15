'use client';

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

export function BarSimple({
  data,
  xKey,
  yKey,
  height = 256,
}: {
  data: any[];
  xKey: string;
  yKey: string;
  height?: number;
}) {
  return (
    <div style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xKey} />
          <YAxis />
          <Tooltip />
          <Bar dataKey={yKey} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function PieSimple({
  data,
  valueKey = 'value',
  nameKey = 'name',
  height = 256,
  colors = ['#B4A77E', '#002741', '#5A6F7B', '#8FA0A8', '#15364A'],
}: {
  data: any[];
  valueKey?: string;
  nameKey?: string;
  height?: number;
  colors?: string[];
}) {
  return (
    <div style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} dataKey={valueKey} nameKey={nameKey} outerRadius={92} label>
            {data.map((_, i) => (
              <Cell key={i} fill={colors[i % colors.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
