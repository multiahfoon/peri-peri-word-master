import React from 'react'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'

import App from './App'

describe('App', () => {
  it('it displays "Game Master"', () => {
    render(<App />)
    const header = screen.getByRole('heading', { level: 1 })
    expect(header).toHaveTextContent('Game Master')
  })
  it('it displays "WORD"', () => {
    render(<App />)
    fireEvent.click(screen.getByText('Start Game'))
    const header = screen.getAllByRole('heading', { level: 1 })
    expect(header[1]).toHaveTextContent('WORD')
  })
})

describe('App', () => {
  for (let i = 0; i < 100; i++) {
    it(`Test #${i + 1}`, () => {
      render(<App />)
      const header = screen.getByRole('heading', { level: 1 })
      expect(header).toHaveTextContent('Game Master')
    })
  }
})
