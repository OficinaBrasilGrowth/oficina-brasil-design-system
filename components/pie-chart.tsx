'use client'

import {
  Cell,
  Legend,
  Pie,
  PieChart as RechartsPieChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'

const CHART_COLORS = ['var(--chart-1)', 'var(--chart-2)', 'var(--chart-3)', 'var(--chart-4)', 'var(--chart-5)']

export interface PieChartProps {
  data: Record<string, string | number>[]
  nameKey: string
  valueKey: string
  height?: number
  /** Set above 0 to render a donut. */
  innerRadius?: number
  title?: string
  isAnimationActive?: boolean
}

/** A pie chart when innerRadius is 0, or a donut chart when it is positive. */
export function PieChart({
  data,
  nameKey,
  valueKey,
  height = 280,
  innerRadius = 0,
  title,
  isAnimationActive = true,
}: PieChartProps) {
  return (
    <div>
      <ResponsiveContainer width="100%" height={height}>
        <RechartsPieChart>
          <Tooltip
            contentStyle={{ backgroundColor: 'var(--popover)', borderColor: 'var(--border)', borderRadius: 8, fontSize: 13 }}
            labelStyle={{ color: 'var(--popover-foreground)' }}
          />
          <Legend wrapperStyle={{ fontSize: 12 }} />
          <Pie
            data={data}
            nameKey={nameKey}
            dataKey={valueKey}
            cx="50%"
            cy="50%"
            outerRadius="76%"
            innerRadius={innerRadius}
            paddingAngle={2}
            isAnimationActive={isAnimationActive}
          >
            {data.map((entry, index) => (
              <Cell key={`${entry[nameKey]}-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />
            ))}
          </Pie>
        </RechartsPieChart>
      </ResponsiveContainer>
      <table className="sr-only">
        <caption>{title ?? 'Dados do gráfico'}</caption>
        <thead>
          <tr>
            <th scope="col">{nameKey}</th>
            <th scope="col">{valueKey}</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <th scope="row">{row[nameKey]}</th>
              <td>{row[valueKey]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
