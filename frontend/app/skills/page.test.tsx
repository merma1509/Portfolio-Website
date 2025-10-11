import { render, screen } from '@testing-library/react'
import Skills from './page'

describe('Skills Page', () => {
  it('renders the skills page correctly', () => {
    render(<Skills />)

    // Check if main sections are present
    expect(screen.getByText('Skills & Expertise')).toBeInTheDocument()
  })

  it('displays skill categories', () => {
    render(<Skills />)

    // Check for different skill categories
    expect(screen.getByText('AI')).toBeInTheDocument()
    expect(screen.getByText('IoT & CPS')).toBeInTheDocument()
    expect(screen.getByText('Cybersecurity')).toBeInTheDocument()
    expect(screen.getByText('SpaceTech')).toBeInTheDocument()
    expect(screen.getByText('Business')).toBeInTheDocument()
  })

  it('displays technical skills', () => {
    render(<Skills />)

    // Check for specific technical skills
    expect(screen.getByText(/Predictive Modeling/i)).toBeInTheDocument()
    expect(screen.getByText(/Machine Learning/i)).toBeInTheDocument()
    expect(screen.getByText(/Cybersecurity/i)).toBeInTheDocument()
  })
})
