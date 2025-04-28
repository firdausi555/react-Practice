import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

test('counter works correctly', async () => {
  render(<Counter />);

  const increaseButton = screen.getByRole('button', { name: /increase/i });
  const decreaseButton = screen.getByRole('button', { name: /decrease/i });
  const resetButton = screen.getByRole('button', { name: /reset/i });

  // Check initial state
  expect(screen.getByText(/counter: 0/i)).toBeInTheDocument();

  // Click Increase
  await userEvent.click(increaseButton);
  expect(screen.getByText(/counter: 1/i)).toBeInTheDocument();

  // Click Increase again
  await userEvent.click(increaseButton);
  expect(screen.getByText(/counter: 2/i)).toBeInTheDocument();

  // Click Decrease
  await userEvent.click(decreaseButton);
  expect(screen.getByText(/counter: 1/i)).toBeInTheDocument();

  // Click Reset
  await userEvent.click(resetButton);
  expect(screen.getByText(/counter: 0/i)).toBeInTheDocument();
});
