import { render, screen, fireEvent } from '@testing-library/react';
import Home from './Home';
import { BookProvider } from '../../context/BookContext';

test('Home should display added books correctly', () => {
  render(
    <BookProvider>
      <Home />
    </BookProvider>
  );

  // Gunakan getByLabelText untuk memilih input berdasarkan labelnya
  const titleInput = screen.getByLabelText(/judul/i);  // Menggunakan label untuk memilih input "Judul"
  const authorInput = screen.getByLabelText(/penulis/i);  // Menggunakan label untuk memilih input "Penulis"
  const submitButton = screen.getByRole('button', { name: /Tambah Buku/i });

  fireEvent.change(titleInput, { target: { value: 'Buku A' } });
  fireEvent.change(authorInput, { target: { value: 'Penulis A' } });
  fireEvent.click(submitButton);

  expect(screen.getByText(/Buku A/i)).toBeInTheDocument();
  expect(screen.getByText(/Penulis A/i)).toBeInTheDocument();
});
