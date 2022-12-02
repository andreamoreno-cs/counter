// import necessary react testing library helpers here
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import the Counter component here
import Counter from '../components/Counter';

let count
let increment
let decrement

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
  count = screen.findAllByDisplayValue(0)
  increment = screen.findAllByText('button', { name: '+' })
  decrement = screen.findAllByText('button', { name: '-' })

})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  beforeEach;
  const counterMessage = screen.getByText(/Counter/i)
  expect(counterMessage).toBeInTheDocument()
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  waitFor(() => expect(count).toHaveValue(0))
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above

  waitFor(() => expect(count).toHaveValue(0));
  fireEvent.click(screen.getByText('+'));
  waitFor(() => expect(count).toHaveValue(1));
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above

  waitFor(() => expect(count).toHaveValue(0));
  userEvent.click(screen.getByText('-'));
  waitFor(() => expect(count).toHaveValue(-1));
});
