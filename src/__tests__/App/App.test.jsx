import { describe, test, expect, beforeEach, afterEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import App from '@/App'

describe('Simple working test on App', () => {
  beforeEach(() => {
    render(<App />)
  })

  afterEach(cleanup)

  test('the title is visible', () => {
    expect(screen.getByText('Vite + React')).toBeInTheDocument()
  })

  test('should increment count on click', async () => {
    const counter = screen.getByRole('button', { name: /count is/i })
    expect(counter.textContent).toBe('count is 0')
    await userEvent.click(counter)
    expect(counter.textContent).toBe('count is 1')
  })
})
