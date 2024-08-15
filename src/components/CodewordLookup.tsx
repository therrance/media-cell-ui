import React, { useState } from 'react';
import axios from 'axios';

const CodewordLookup: React.FC = () => {
  const [codeword, setCodeword] = useState('');
  const [actionId, setActionId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleLookup = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/action/${codeword}`);
      setActionId(response.data.action_id);
      setError(null);
    } catch (err) {
      setActionId(null);
      setError('Codeword not found');
    }
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Lookup Action by Codeword</h2>
      <input
        type="text"
        value={codeword}
        onChange={(e) => setCodeword(e.target.value)}
        placeholder="Enter codeword"
        className="border border-gray-300 rounded-md px-4 py-2 mr-2"
      />
      <button onClick={handleLookup} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        Lookup
      </button>
      {actionId && (
        <p className="mt-4">
          Action ID: <span className="font-semibold">{actionId}</span>
        </p>
      )}
      {error && <p className="mt-4 text-red-500">{error}</p>}
    </div>
  );
};

export default CodewordLookup;
