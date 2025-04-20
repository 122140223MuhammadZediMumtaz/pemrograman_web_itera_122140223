import React, { useState } from 'react';
import { useBookContext } from '../../context/BookContext';
import BookForm from '../../components/BookForm/BookForm';
import BookList from '../../components/BookList/BookList';
import BookFilter from '../../components/BookFilter/BookFilter';

const Home = () => {
  const { books, addBook, updateBook, deleteBook } = useBookContext();

  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [editingBook, setEditingBook] = useState(null);
  const [message, setMessage] = useState('');

  // Handle form submission for adding or updating a book
  const handleSubmit = (book) => {
    if (editingBook) {
      updateBook(book);
      setMessage('Buku berhasil diperbarui!');
      setEditingBook(null); // Reset after update
    } else {
      addBook(book);
      setMessage('Buku berhasil ditambahkan!');
    }
  };

  // Set the book to be edited
  const handleEdit = (book) => {
    setEditingBook(book); // Set book for editing
  };

  // Handle book deletion
  const handleDelete = (id) => {
    deleteBook(id); // Delete book by id
    setMessage('Buku berhasil dihapus!');
  };

  // Remove message after 2 seconds (2000ms)
  React.useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage('');
      }, 2000); // Change 2000ms to any duration you like
      return () => clearTimeout(timer); // Clear timeout when component is unmounted
    }
  }, [message]);

  // Filter books based on status and search term
  const filteredBooks = books.filter((book) => {
    const matchesFilter = filter === 'all' || book.status === filter;
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="app-container">
      <h1>Manajemen Buku Pribadi</h1>

      <BookForm onSubmit={handleSubmit} editingBook={editingBook} />

      {/* Display success or error messages as pop-up */}
      {message && <div className="message">{message}</div>}

      <div className="filter-bar">
        <BookFilter filter={filter} setFilter={setFilter} />
        <input
          type="text"
          placeholder="Cari berdasarkan judul..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* List of books */}
      <BookList books={filteredBooks} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default Home;
