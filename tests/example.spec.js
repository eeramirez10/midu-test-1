// @ts-check
import { test, expect } from '@playwright/test'
const LOCALHOST_URL = 'http://127.0.0.1:5173/'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

test('app shows random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const text = page.getByRole('paragraph')
  const image = page.getByRole('img')

  const textContext = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  expect(textContext?.length).toBeGreaterThan(0)
  expect(imageSrc?.startsWith(CAT_PREFIX_IMAGE_URL)).toBeTruthy()
})
