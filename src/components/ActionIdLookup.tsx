import React, { useState } from 'react';
import axios from 'axios';

const ActionIdLookup: React.FC = () => {
  const [actionId, setActionId] = useState('');
  const [codewords, setCodewords] = useState<number[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleLookup = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/codewords/${actionId}`);
      setCodewords(response.data.codewords);
      setError(null);
    } catch (err) {
      setCodewords(null);
      setError('Action ID not found');
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Lookup Codewords by Action ID</h2>
      <input
        type="text"
        value={actionId}
        onChange={(e) => setActionId(e.target.value)}
        placeholder="Enter action ID"
        className="border border-gray-300 rounded-md px-4 py-2 mr-2"
      />
      <button onClick={handleLookup} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        Lookup
      </button>
      {codewords && (
        <ul className="mt-4 list-disc pl-5">
          {codewords.map((codeword) => (
            <li key={codeword}>{codeword}</li>
          ))}
        </ul>
      )}
      {error && <p className="mt-4 text-red-500">{error}</p>}
    </div>
  );
};

export default ActionIdLookup;
