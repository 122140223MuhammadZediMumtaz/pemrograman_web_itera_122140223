import { render, screen } from '@testing-library/react';
import BookList from './BookList';

test('BookList should render books correctly', () => {
  const books = [
    { id: 1, title: 'Buku A', author: 'Penulis A', status: 'milik' },
    { id: 2, title: 'Buku B', author: 'Penulis B', status: 'baca' },
  ];

  render(<BookList books={books} onEdit={jest.fn()} onDelete={jest.fn()} />);

  expect(screen.getByText(/Buku A/i)).toBeInTheDocument();
  expect(screen.getByText(/Buku B/i)).toBeInTheDocument();
  expect(screen.getAllByRole('button', { name: /edit/i })).toHaveLength(2);
  expect(screen.getAllByRole('button', { name: /hapus/i })).toHaveLength(2);
});
