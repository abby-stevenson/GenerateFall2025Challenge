import React, { useEffect, useState } from 'react';
import TableRow from './TableRow';
import TableHeader from './TableHeader';
import './AlienTable.css';

type Alien = {
  id: string;
  firstName: string;
  lastName: string;
  type: string;
  url: string;
  stats: {
    atk: number;
    hp: number;
    spd: number;
  };
};

const PARTICIPANT_ID = "d5b54d25-7ad6-409e-9ef7-a6079e679ff5";
const AlienTable: React.FC = () => {
  const [aliens, setAliens] = useState<Alien[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/v1/challenge/frontend/${PARTICIPANT_ID}/aliens?limit=10&offset=0`)
      .then(res => res.json())
      .then(data => {
        setAliens(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="alien-table-container">
      <TableHeader />
      {loading && <div>Loading...</div>}
      {aliens.map(alien => (
        <TableRow
          key={alien.id}
          firstName={alien.firstName}
          lastName={alien.lastName}
          id={alien.id}
          type={alien.type}
        />
      ))}
    </div>
  );
};

export default AlienTable;