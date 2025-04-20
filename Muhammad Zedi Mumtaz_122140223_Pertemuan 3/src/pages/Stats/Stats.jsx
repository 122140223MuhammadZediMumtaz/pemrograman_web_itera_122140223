import React, { useState, useEffect } from 'react';
import useBookStats from '../../hooks/useBookStats';

const Stats = () => {
  const stats = useBookStats();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (stats.total !== undefined) {
      setLoading(false);
    }
  }, [stats]);

  if (loading) {
    return <div>Loading...</div>;  // Show loading message
  }

  return (
    <div className="space-y-2 bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold">Statistik Buku</h2>
      <p>Total Buku: {stats.total || 0}</p>
      <p>Milik: {stats.owned || 0}</p>
      <p>Sedang Dibaca: {stats.reading || 0}</p>
      <p>Ingin Dibeli: {stats.wantToBuy || 0}</p>
    </div>
  );
};

export default Stats;
