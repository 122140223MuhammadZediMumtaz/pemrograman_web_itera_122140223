import { render, screen, fireEvent } from '@testing-library/react';
import { BookProvider, useBookContext } from '../context/BookContext';

// Custom hook untuk mendapatkan state buku dari context
const TestComponent = () => {
  const { books, addBook } = useBookContext();
  return (
    <div>
      <button onClick={() => addBook({ title: 'Buku A', author: 'Penulis A', status: 'milik' })}>
        Tambah Buku
      </button>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};

test('BookContext should manage books state', () => {
  render(
    <BookProvider>
      <TestComponent />
    </BookProvider>
  );

  // Memastikan buku belum ada
  expect(screen.queryByText(/Buku A/i)).toBeNull();

  // Menambah buku dan memverifikasi state
  const addButton = screen.getByText(/Tambah Buku/i);
  fireEvent.click(addButton);
  expect(screen.getByText(/Buku A/i)).toBeInTheDocument();
});
