'use client';

import { useEffect, useState, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import ReportViewer from '@/components/ReportViewer';

// Wrap the main content in a separate component to use Suspense
function ReportContent() {
  const searchParams = useSearchParams();
  const recordId = searchParams.get('recordId');
  const shouldPrint = searchParams.get('print') === 'true';
  const [record, setRecord] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (!recordId) {
      setError('No record ID provided');
      setLoading(false);
      return;
    }

    const fetchRecordAndGeneratePdf = async () => {
      try {
        const response = await fetch('/api/report', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ recordId }),
        });

        if (!response.ok) {
          throw new Error('Failed to generate report');
        }

        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setPdfUrl(url);
      } catch (err) {
        setError('Failed to generate report. Please try again.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecordAndGeneratePdf();
  }, [recordId]);

  useEffect(() => {
    if (shouldPrint && pdfUrl && iframeRef.current) {
      iframeRef.current.onload = () => {
        iframeRef.current?.contentWindow?.print();
      };
    }
  }, [shouldPrint, pdfUrl]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
       {/* @ts-ignore */}
      {pdfUrl && <ReportViewer pdfUrl={pdfUrl} iframeRef={iframeRef} />}
    </div>
  );
}

// Main page component with Suspense boundary
export default function ReportPage() {
  return (
    <Suspense fallback={
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
      </div>
    }>
      <ReportContent />
    </Suspense>
  );
}