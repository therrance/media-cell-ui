import React from 'react';
import CodewordLookup from './components/CodewordLookup';
import ActionIdLookup from './components/ActionIdLookup';

const App: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Media Cell API Client</h1>
      <CodewordLookup />
      <hr className="my-8" />
      <ActionIdLookup />
    </div>
  );
};

export default App;
