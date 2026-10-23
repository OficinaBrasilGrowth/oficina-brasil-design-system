# Changelog

## 1.0.0-rc.2

### Incluído

- BarChart: `layout="horizontal"` e `stacked`
- PieChart: gráficos de pizza e donut (via `innerRadius`)
- Páginas, testes de acessibilidade e regressão visual para os novos gráficos

### Alterado

- `next` passou para `devDependencies` e não é mais instalado junto com o pacote
- A página de comparação Figma × código saiu da navegação padrão e é ativada por `NEXT_PUBLIC_ENABLE_STYLE_GUIDE_COMPARISON=true`

## 1.0.0

Primeira versão estável do Oficina Brasil Design System.

### Incluído

- Foundations e tokens oficiais da marca
- Componentes React + TypeScript, com import individual por componente
- CSS distribuído junto com o pacote
- Documentação e Style Guide navegável
- Navegação por teclado em todos os componentes interativos
- Auditorias automatizadas de acessibilidade (axe-core)
- Regressão visual automatizada
- Tema oficial: Light

### Known limitations

- Nenhum componente foi validado com leitor de tela real
  (VoiceOver/NVDA) — a auditoria de acessibilidade atual é automatizada
  e por simulação de teclado
