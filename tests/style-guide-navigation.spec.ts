import { test, expect } from '@playwright/test'

test('comparison stays out of the menu by default and remains directly available', async ({ page }) => {
  await page.goto('/style-guides')
  await expect(page.getByRole('link', { name: 'Comparação código × Figma' })).toHaveCount(0)

  await page.goto('/style-guides/comparison')
  await expect(page.getByRole('heading', { name: 'Comparação código × Figma' })).toBeVisible()
})

test('comparison appears in the menu when enabled at build time', async ({ page }) => {
  test.skip(process.env.NEXT_PUBLIC_ENABLE_STYLE_GUIDE_COMPARISON !== 'true', 'requires a build with the feature flag enabled')
  await page.goto('/style-guides')
  await expect(page.getByRole('link', { name: 'Comparação código × Figma' })).toBeVisible()
})
