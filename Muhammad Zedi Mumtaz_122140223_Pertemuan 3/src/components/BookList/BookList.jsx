import React from 'react';
import PropTypes from 'prop-types';

const BookList = ({ books, onEdit, onDelete }) => {
  return (
    <ul className="book-list">
      {books.map(book => (
        <li key={book.id}>
          <div className="info">
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <span>{book.status}</span>
          </div>
          <div className="actions">
            <button onClick={() => onEdit(book)}>Edit</button>
            <button onClick={() => onDelete(book.id)}>Hapus</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired
  })).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default BookList;
