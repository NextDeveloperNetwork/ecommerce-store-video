import React from 'react';
import {UserProfile} from "@clerk/nextjs";
const EdiStoreTerms = async () => {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-md shadow-lg">
      <h1 className="text-4xl font-bold mb-8">Profili i perdoruesit - EDI STORE</h1>

      <UserProfile/>
    </div>
  );
};

export default EdiStoreTerms;


