import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    // Mendapatkan item dari localStorage atau menggunakan initialValue jika tidak ada
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  useEffect(() => {
    if (storedValue !== undefined) {
      // Hanya menyimpan ke localStorage jika nilai baru berbeda
      localStorage.setItem(key, JSON.stringify(storedValue));
    }
  }, [key, storedValue]); // Simpan hanya jika storedValue berubah

  return [storedValue, setStoredValue];
};

export default useLocalStorage;
