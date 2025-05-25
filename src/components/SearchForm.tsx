
import { useState } from 'react';

interface SearchFormProps {
  onSearch: (params: {
    parcelNumber: string;
    ownerName: string;
    address: string;
  }) => void;
  loading: boolean;
}

export default function SearchForm({ onSearch, loading }: SearchFormProps) {
  const [parcelNumber, setParcelNumber] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ parcelNumber, ownerName, address });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="parcelNumber" className="block text-sm font-medium text-gray-700">
          Parcel Number
        </label>
        <input
          type="text"
          id="parcelNumber"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 p-2 border"
          value={parcelNumber}
          onChange={(e) => setParcelNumber(e.target.value)}
        />
      </div>
      
      <div>
        <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700">
          Owner Name
        </label>
        <input
          type="text"
          id="ownerName"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 p-2 border"
          value={ownerName}
          onChange={(e) => setOwnerName(e.target.value)}
        />
      </div>
      
      <div>
        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
          Property Address
        </label>
        <input
          type="text"
          id="address"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 p-2 border"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      
      <div>
        <button
          type="submit"
          disabled={loading}
          className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {loading ? 'Searching...' : 'Search Land Records'}
        </button>
      </div>
    </form>
  );
}