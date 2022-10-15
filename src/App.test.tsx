import React from 'react'
import { render, screen } from '@testing-library/react'
import { App } from './App'

test('renders headline', () => {
    render(<App/>)
    const headline = screen.getByText(/UI-Controls: Progress Buttons/i)
    expect(headline).toBeInTheDocument()
})
