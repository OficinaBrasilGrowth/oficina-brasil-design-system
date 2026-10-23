import { BarChart } from '@/components/bar-chart'
import { ChartCard } from '@/components/chart-card'

const data = [
  { mes: 'Jan', receita: 4000, custo: 2400 },
  { mes: 'Fev', receita: 3000, custo: 1398 },
  { mes: 'Mar', receita: 5000, custo: 3800 },
  { mes: 'Abr', receita: 4780, custo: 2908 },
]

export default function Page() {
  return (
    <div className="max-w-3xl flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-bold mb-2">BarChart</h1>
        <p className="text-sm text-muted-foreground">
          Gráficos de barras verticais e horizontais, agrupados ou empilhados.
          As cores usam os tokens <code>var(--chart-N)</code>.
        </p>
      </div>

      <ChartCard title="Receita vs custo por mês · barras verticais">
        <BarChart
          data={data}
          categoryKey="mes"
          series={[
            { key: 'receita', label: 'Receita' },
            { key: 'custo', label: 'Custo' },
          ]}
          isAnimationActive={false}
          title="Receita vs custo por mês · barras verticais"
        />
      </ChartCard>

      <ChartCard title="Receita vs custo por mês · barras horizontais">
        <BarChart
          data={data}
          categoryKey="mes"
          series={[{ key: 'receita', label: 'Receita' }, { key: 'custo', label: 'Custo' }]}
          layout="horizontal"
          isAnimationActive={false}
          title="Receita vs custo por mês · barras horizontais"
        />
      </ChartCard>

      <ChartCard title="Composição da receita · barras empilhadas">
        <BarChart
          data={data}
          categoryKey="mes"
          series={[{ key: 'receita', label: 'Receita' }, { key: 'custo', label: 'Custo' }]}
          stacked
          isAnimationActive={false}
          title="Composição da receita · barras empilhadas"
        />
      </ChartCard>

      <div>
        <p className="text-sm font-medium mb-2">Props</p>
        <pre tabIndex={0} className="text-xs bg-muted p-4 rounded-lg overflow-x-auto">{`interface BarChartSeries {
  key: string
  label: string
}

interface BarChartProps {
  data: Record<string, string | number>[]
  categoryKey: string      // qual campo de "data" vai no eixo X
  series: BarChartSeries[] // cada item vira uma série de barras, com a próxima cor da paleta
  height?: number          // padrão 280
  layout?: 'vertical' | 'horizontal'
  stacked?: boolean        // empilha as séries
}`}</pre>
      </div>
    </div>
  )
}
