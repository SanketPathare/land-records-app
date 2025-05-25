import Link from "next/link";

interface SearchResultsProps {
  results: any[];
  loading: boolean;
}

export default function SearchResults({
  results,
  loading,
}: SearchResultsProps) {
  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded">
        No land records found. Try adjusting your search criteria.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">Search Results</h2>

      <div className="space-y-4">
        {results.map((record) => (
          <div
            key={record.id}
            className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
          >
            <h3 className="text-lg font-medium text-red-700">
              {record.ownerName}
            </h3>
            <p className="text-gray-600">{record.address}</p>
            <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-gray-500">Parcel Number</p>
                <p>{record.parcelNumber}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Property ID</p>
                <p>{record.propertyId}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Acreage</p>
                <p>{record.acreage}</p>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <Link
                href={`/report?recordId=${record.id}`}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Generate Report
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
