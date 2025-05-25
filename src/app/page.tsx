
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-160px)] flex items-center">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Land Records Search System
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Access comprehensive land records, property information, and generate official reports.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/search"
              className="px-6 py-3 bg-red-600 text-white font-medium rounded-lg shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Search Records
            </Link>
            <Link
              href="#"
              className="px-6 py-3 bg-white text-gray-800 font-medium rounded-lg shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}