import { test, expect } from '@playwright/test'

test('BarChart mostra barras verticais, horizontais e empilhadas com tabela acessível', async ({ page }) => {
  await page.goto('/style-guides/components/bar-chart')
  for (const name of [
    'Receita vs custo por mês · barras verticais',
    'Receita vs custo por mês · barras horizontais',
    'Composição da receita · barras empilhadas',
  ]) {
    await expect(page.getByRole('table', { name })).toHaveCount(1)
  }
  await expect(page.locator('.recharts-bar-rectangle path')).toHaveCount(24)
})

test('PieChart mostra pizza e donut com tabelas acessíveis', async ({ page }) => {
  await page.goto('/style-guides/components/pie-chart')
  await expect(page.getByRole('table', { name: 'Visitas por canal' })).toHaveCount(2)
  await expect(page.locator('.recharts-pie-sector')).toHaveCount(8)
})
