import { PieChart } from '@/components/pie-chart'
import { ChartCard } from '@/components/chart-card'

const data = [
  { canal: 'Busca orgânica', visitas: 420 },
  { canal: 'Acesso direto', visitas: 310 },
  { canal: 'Redes sociais', visitas: 190 },
  { canal: 'E-mail', visitas: 120 },
]

export default function Page() {
  return (
    <div className="max-w-3xl flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-bold mb-2">PieChart</h1>
        <p className="text-sm text-muted-foreground">
          Use pizza para mostrar a participação de cada categoria. Defina
          <code> innerRadius</code> para transformar o gráfico em donut. Os dados
          também ficam disponíveis numa tabela acessível.
        </p>
      </div>

      <ChartCard title="Visitas por canal · pizza">
        <PieChart
          data={data}
          nameKey="canal"
          valueKey="visitas"
          title="Visitas por canal"
          isAnimationActive={false}
        />
      </ChartCard>

      <ChartCard title="Visitas por canal · donut">
        <PieChart
          data={data}
          nameKey="canal"
          valueKey="visitas"
          innerRadius={64}
          title="Visitas por canal"
          isAnimationActive={false}
        />
      </ChartCard>

      <div>
        <p className="text-sm font-medium mb-2">Props</p>
        <pre tabIndex={0} className="text-xs bg-muted p-4 rounded-lg overflow-x-auto">{`interface PieChartProps {
  data: Record<string, string | number>[]
  nameKey: string
  valueKey: string
  height?: number
  innerRadius?: number // padrão 0; acima de 0 exibe donut
  title?: string       // legenda da tabela de dados acessível
}`}</pre>
      </div>
    </div>
  )
}
