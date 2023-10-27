import { render, screen, cleanup } from '@testing-library/react';
import App from './App';
import Navbar from './componets/Navbar';

test('App component testing', () => {
  render(<App />);
  const linkElement = screen.getByTestId('app-data')
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveTextContent('Application')
});

test('This is Navbar Componet Testing', ()=> {
  render(<Navbar />);
  const linkElement = screen.getByTestId('test1')
  expect(linkElement).toBeInTheDocument();
})
