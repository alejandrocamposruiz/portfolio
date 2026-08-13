import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio with Alejandro Campos and Compliance Technology section', () => {
  render(<App />);
  const headingElement = screen.getByRole('heading', { level: 1, name: /Alejandro Campos/i });
  expect(headingElement).toBeInTheDocument();
  
  const complianceHeadings = screen.getAllByText(/Compliance Technology/i);
  expect(complianceHeadings.length).toBeGreaterThan(0);

  const monitoringDemoElement = screen.getByText(/Compliance Monitoring Demo/i);
  expect(monitoringDemoElement).toBeInTheDocument();

  const pipelineElement = screen.getByText(/Compliance Data Pipeline/i);
  expect(pipelineElement).toBeInTheDocument();
});
