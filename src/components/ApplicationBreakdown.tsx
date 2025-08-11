'use client';

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieLabelRenderProps,
} from 'recharts';

const COLORS = [
  '#8884d8',
  '#82ca9d',
  '#ffc658',
  '#ff7a7a',
  '#8dd1e1',
  '#a3a0fb',
];

const renderLabel = ({ name, percent }: PieLabelRenderProps) =>
  `${name}: ${((percent ?? 0) * 100).toFixed(0)}%`;

const ApplicationBreakdown = () => {
  const data = [
    { name: 'Applied', value: 100 },
    { name: 'Shortlisted', value: 50 },
    { name: 'Interviewing', value: 25 },
    { name: 'Hired', value: 10 },
    { name: 'Rejected', value: 15 },
  ];

  const cleanData = data.filter((d) => Number.isFinite(d.value) && d.value > 0);

  return (
    <div className='flex flex-col gap-4 p-5 justify-between'>
      <h2 className='text-lg font-bold'>Application Breakdown</h2>
      <div style={{ height: 350 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={cleanData}
              dataKey='value'
              nameKey='name'
              cx='50%' // Center X
              cy='50%' // Center Y
              innerRadius={70} // Donut hole size
              outerRadius={120} // Outer circle size
              paddingAngle={2} // Space between slices
              labelLine={false} // Hide line to labels
              label={renderLabel} // Show labels with % on each slice
            >
              {cleanData.map((entry, i) => (
                <Cell
                  key={`slice-${entry.name}`}
                  fill={COLORS[i % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              formatter={(value: number, name: string) => [value, name]}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ApplicationBreakdown;
