import { useMemo } from 'react';
import { useBookContext } from '../context/BookContext';

const useBookStats = () => {
  const { books } = useBookContext();
  
  // Menggunakan useMemo untuk menghitung statistik hanya ketika data buku berubah
  const { total, owned, reading, wantToBuy } = useMemo(() => {
    const totalBooks = books.length;
    const ownedBooks = books.filter(b => b.status === 'milik').length;
    const readingBooks = books.filter(b => b.status === 'baca').length;
    const wantToBuyBooks = books.filter(b => b.status === 'beli').length;
    
    return {
      total: totalBooks,
      owned: ownedBooks,
      reading: readingBooks,
      wantToBuy: wantToBuyBooks,
    };
  }, [books]); // Memastikan perhitungan hanya dilakukan ketika data 'books' berubah

  return { total, owned, reading, wantToBuy };
};

export default useBookStats;
