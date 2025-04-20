import { render, screen, fireEvent } from '@testing-library/react';
import BookFilter from './BookFilter';

test('BookFilter should apply the correct filter', () => {
  const setFilter = jest.fn();
  render(<BookFilter filter="all" setFilter={setFilter} />);

  const select = screen.getByRole('combobox');
  fireEvent.change(select, { target: { value: 'baca' } });

  expect(setFilter).toHaveBeenCalledWith('baca');
});
