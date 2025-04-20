import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const BookForm = ({ onSubmit, editingBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [status, setStatus] = useState('milik');
  const [error, setError] = useState('');  // State untuk error handling

  useEffect(() => {
    if (editingBook) {
      setTitle(editingBook.title);
      setAuthor(editingBook.author);
      setStatus(editingBook.status);
    }
  }, [editingBook]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');  // Reset error saat submit baru

    // Validasi input
    if (!title || !author) {
      setError('Semua field harus diisi');
      return;
    }

    // Cek jika penulis mengandung angka
    if (/^\d+$/.test(author)) {
      setError('Penulis tidak boleh mengandung angka');
      return;
    }

    const book = {
      title,
      author,
      status,
      id: editingBook ? editingBook.id : Date.now(), // Pakai ID lama kalau edit
    };

    onSubmit(book);
    setTitle('');
    setAuthor('');
    setStatus('milik');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 space-y-2">
      {/* Label dan Input untuk Judul */}
      <label htmlFor="title">Judul</label>
      <input
        id="title"   // Hubungkan label dengan input menggunakan id
        type="text"
        placeholder="Judul"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="p-2 border rounded w-full"
      />

      {/* Label dan Input untuk Penulis */}
      <label htmlFor="author">Penulis</label>
      <input
        id="author"  // Hubungkan label dengan input menggunakan id
        type="text"
        placeholder="Penulis"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="p-2 border rounded w-full"
      />

      {/* Dropdown Status */}
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="p-2 border rounded w-full"
      >
        <option value="milik">Milik</option>
        <option value="baca">Sedang Dibaca</option>
        <option value="beli">Ingin Dibeli</option>
      </select>

      {/* Menampilkan pesan error */}
      {error && <div className="text-red-500">{error}</div>} 

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        {editingBook ? 'Perbarui Buku' : 'Tambah Buku'}
      </button>
    </form>
  );
};

BookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,      // onSubmit harus berupa fungsi
  editingBook: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
    status: PropTypes.string
  }),   // editingBook adalah objek yang memiliki id, title, author, dan status
};

export default BookForm;
