'use client'

import { useMemo, useState, type SyntheticEvent } from 'react'

const FILE_KEY = '1GcRaoQD2KA2IsI6zKQWXC'
const FILE_NAME = 'Oficina-Brasil-Design-System'

type ComparisonItem = {
  label: string
  route: string
  figmaNodeId: string
}

const components: ComparisonItem[] = [
  { label: 'Accordion', route: 'accordion', figmaNodeId: '445:328' },
  { label: 'AdminPageHeader', route: 'admin-page-header', figmaNodeId: '453:92' },
  { label: 'Alert', route: 'alert', figmaNodeId: '432:653' },
  { label: 'AlertDialog', route: 'alert-dialog', figmaNodeId: '453:32' },
  { label: 'Avatar', route: 'avatar', figmaNodeId: '434:136' },
  { label: 'AvatarGroup', route: 'avatar-group', figmaNodeId: '434:200' },
  { label: 'Badge', route: 'badge', figmaNodeId: '194:64' },
  { label: 'BarChart', route: 'bar-chart', figmaNodeId: '404:101' },
  { label: 'BrandSelect', route: 'select', figmaNodeId: '346:26' },
  { label: 'Breadcrumb', route: 'breadcrumb', figmaNodeId: '445:307' },
  { label: 'Button', route: 'button', figmaNodeId: '98:2' },
  { label: 'ChartCard', route: 'chart-card', figmaNodeId: '360:18' },
  { label: 'Checkbox', route: 'checkbox', figmaNodeId: '292:31' },
  { label: 'CommandPalette', route: 'command-palette', figmaNodeId: '445:355' },
  { label: 'Considerations', route: 'considerations', figmaNodeId: '454:12' },
  { label: 'CopyButton', route: 'copy-button', figmaNodeId: '448:128' },
  { label: 'DataTable', route: 'data-table', figmaNodeId: '452:125' },
  { label: 'DatePicker', route: 'date-picker', figmaNodeId: '343:197' },
  { label: 'DropdownMenu', route: 'dropdown-menu', figmaNodeId: '448:65' },
  { label: 'EmptyState', route: 'empty-state', figmaNodeId: '436:148' },
  { label: 'FileUploadButton', route: 'file-upload-button', figmaNodeId: '260:31' },
  { label: 'FilterBar', route: 'filter-bar', figmaNodeId: '450:44' },
  { label: 'IconButton', route: 'icon-button', figmaNodeId: '448:114' },
  { label: 'InfoTooltip', route: 'info-tooltip', figmaNodeId: '431:48' },
  { label: 'Input', route: 'input', figmaNodeId: '241:2' },
  { label: 'KpiCard', route: 'kpi-card', figmaNodeId: '328:80' },
  { label: 'Label', route: 'label', figmaNodeId: '351:16' },
  { label: 'LineChart', route: 'line-chart', figmaNodeId: '404:101' },
  { label: 'PieChart', route: 'pie-chart', figmaNodeId: '404:101' },
  { label: 'Modal', route: 'modal', figmaNodeId: '453:21' },
  { label: 'MultiSelect', route: 'multi-select', figmaNodeId: '341:95' },
  { label: 'Pagination', route: 'pagination', figmaNodeId: '435:119' },
  { label: 'Popover', route: 'popover', figmaNodeId: '435:55' },
  { label: 'ProgressBar', route: 'progress-bar', figmaNodeId: '189:44' },
  { label: 'ProgressRing', route: 'progress-ring', figmaNodeId: '447:146' },
  { label: 'RadioGroup', route: 'radio-group', figmaNodeId: '352:52' },
  { label: 'Skeleton', route: 'skeleton', figmaNodeId: '436:158' },
  { label: 'Slider', route: 'slider', figmaNodeId: '352:88' },
  { label: 'StatComparison', route: 'stat-comparison', figmaNodeId: '447:174' },
  { label: 'Switch', route: 'switch', figmaNodeId: '352:72' },
  { label: 'Tabs', route: 'tabs', figmaNodeId: '438:310' },
  { label: 'Textarea', route: 'textarea', figmaNodeId: '252:40' },
  { label: 'Toast', route: 'toast', figmaNodeId: '432:682' },
  { label: 'Tooltip', route: 'tooltip', figmaNodeId: '432:59' },
  { label: 'TreeView', route: 'tree-view', figmaNodeId: '441:310' },
]

function figmaEmbedUrl(nodeId: string) {
  const fileUrl = new URL(`https://www.figma.com/design/${FILE_KEY}/${FILE_NAME}`)
  fileUrl.searchParams.set('node-id', nodeId.replace(':', '-'))

  const embedUrl = new URL('https://www.figma.com/embed')
  embedUrl.searchParams.set('embed_host', 'share')
  embedUrl.searchParams.set('url', fileUrl.toString())
  return embedUrl.toString()
}

function hideCodeGuideChrome(event: SyntheticEvent<HTMLIFrameElement>) {
  const doc = event.currentTarget.contentDocument
  if (!doc || doc.getElementById('comparison-iframe-style')) return

  const style = doc.createElement('style')
  style.id = 'comparison-iframe-style'
  style.textContent = `
    aside,
    button[aria-label="Abrir menu"],
    button[aria-label="Fechar menu"] { display: none !important; }
    main { margin-left: 0 !important; padding: 24px !important; max-width: none !important; }
  `
  doc.head.appendChild(style)
}

export default function ComparisonPage() {
  const [selectedRoute, setSelectedRoute] = useState('button')
  const selected = useMemo(
    () => components.find((component) => component.route === selectedRoute) ?? components[0],
    [selectedRoute]
  )
  const codeUrl = `/style-guides/components/${selected.route}`
  const figmaUrl = figmaEmbedUrl(selected.figmaNodeId)

  return (
    <div className="flex flex-col gap-5 min-h-[calc(100vh-4rem)]">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Revisão do design system</p>
          <h1 className="text-2xl font-bold mt-1">Comparação código × Figma</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Escolha um componente e compare a demonstração React com o conjunto correspondente no Figma.
          </p>
        </div>
        <label className="flex flex-col gap-1 text-sm font-medium">
          Componente
          <select
            value={selected.route}
            onChange={(event) => setSelectedRoute(event.target.value)}
            className="min-w-56 rounded-lg border bg-background px-3 py-2"
            style={{ borderColor: 'var(--border)' }}
          >
            {components.map((component) => (
              <option key={component.route} value={component.route}>{component.label}</option>
            ))}
          </select>
        </label>
      </header>

      <div className="grid flex-1 grid-cols-1 gap-4 xl:grid-cols-2 xl:min-h-[calc(100vh-11rem)]">
        <section className="flex min-h-[70vh] flex-col overflow-hidden rounded-xl border bg-card" style={{ borderColor: 'var(--border)' }}>
          <div className="flex items-center justify-between gap-3 border-b px-4 py-3" style={{ borderColor: 'var(--border)' }}>
            <div>
              <h2 className="font-semibold">Código · {selected.label}</h2>
              <p className="text-xs text-muted-foreground">Exemplo React do Style Guide</p>
            </div>
            <a href={codeUrl} target="_blank" rel="noreferrer" className="text-xs font-medium underline underline-offset-2">
              Abrir em outra aba
            </a>
          </div>
          <iframe
            key={codeUrl}
            src={codeUrl}
            title={`Demonstração React de ${selected.label}`}
            onLoad={hideCodeGuideChrome}
            className="min-h-[70vh] w-full flex-1 bg-white"
          />
        </section>

        <section className="flex min-h-[70vh] flex-col overflow-hidden rounded-xl border bg-card" style={{ borderColor: 'var(--border)' }}>
          <div className="flex items-center justify-between gap-3 border-b px-4 py-3" style={{ borderColor: 'var(--border)' }}>
            <div>
              <h2 className="font-semibold">Figma · {selected.label}</h2>
              <p className="text-xs text-muted-foreground">Componente ou quadro correspondente</p>
            </div>
            <a href={`https://www.figma.com/design/${FILE_KEY}/${FILE_NAME}?node-id=${selected.figmaNodeId.replace(':', '-')}`} target="_blank" rel="noreferrer" className="text-xs font-medium underline underline-offset-2">
              Abrir no Figma
            </a>
          </div>
          <iframe
            key={figmaUrl}
            src={figmaUrl}
            title={`Componente ${selected.label} no Figma`}
            allowFullScreen
            className="min-h-[70vh] w-full flex-1 bg-white"
          />
        </section>
      </div>

      <p className="text-xs text-muted-foreground">
        A incorporação do Figma segue as permissões atuais do arquivo. Se a prévia pedir autenticação, use o link “Abrir no Figma”.
      </p>
    </div>
  )
}
