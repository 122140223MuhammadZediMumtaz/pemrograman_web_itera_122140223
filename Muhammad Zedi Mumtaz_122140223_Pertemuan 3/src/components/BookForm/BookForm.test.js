import { render, screen, fireEvent } from '@testing-library/react';
import BookForm from './BookForm';

test('BookForm should accept title and author input', () => {
  render(<BookForm onSubmit={jest.fn()} />);

  const titleInput = screen.getByPlaceholderText(/judul/i);
  fireEvent.change(titleInput, { target: { value: 'Buku A' } });
  expect(titleInput.value).toBe('Buku A');

  const authorInput = screen.getByPlaceholderText(/penulis/i);
  fireEvent.change(authorInput, { target: { value: 'Penulis A' } });
  expect(authorInput.value).toBe('Penulis A');
});

test('BookForm should submit the form', () => {
  const handleSubmit = jest.fn();
  render(<BookForm onSubmit={handleSubmit} />);

  const titleInput = screen.getByPlaceholderText(/judul/i);
  const authorInput = screen.getByPlaceholderText(/penulis/i);
  const submitButton = screen.getByRole('button', { name: /Tambah Buku/i });

  fireEvent.change(titleInput, { target: { value: 'Buku A' } });
  fireEvent.change(authorInput, { target: { value: 'Penulis A' } });
  fireEvent.click(submitButton);

  // Mengabaikan ID dengan menggunakan expect.objectContaining()
  expect(handleSubmit).toHaveBeenCalledWith(expect.objectContaining({
    title: 'Buku A',
    author: 'Penulis A',
    status: 'milik',
  }));
});
