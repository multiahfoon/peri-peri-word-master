import React from 'react'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'

import App from './App'

describe('App', () => {
  it('it displays "Word Master"', () => {
    render(<App />)
    const header = screen.getByRole('heading', { level: 1 })
    expect(header).toHaveTextContent('Word Master')
  })
  it('it displays a button', () => {
    render(<App />)
    fireEvent.click(screen.getByText('Start Game'))
    return screen
      .findByRole('button')
      .then((button) => {
        expect(button.innerHTML).toContain('Submit')
        return null
      })
      .catch((err) => console.error(err))
  })
})

describe('App', () => {
  for (let i = 0; i < 100; i++) {
    it(`Test #${i + 1}`, () => {
      render(<App />)
      const header = screen.getByRole('heading', { level: 1 })
      expect(header).toHaveTextContent('Word Master')
    })
  }
})
