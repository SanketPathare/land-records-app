'use client';

import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

interface ReportViewerProps {
  pdfUrl: string;
  iframeRef?: React.RefObject<HTMLIFrameElement>;
}

export default function ReportViewer({ pdfUrl, iframeRef: propIframeRef }: ReportViewerProps) {
  const localIframeRef = useRef<HTMLIFrameElement>(null);
  const iframeRef = propIframeRef || localIframeRef;

  const handlePrint = useReactToPrint({
      // @ts-ignore
    content: () => iframeRef.current?.contentWindow?.document.body || null,
  });

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Land Record Report</h2>
        <button
          onClick={handlePrint}
          className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded"
        >
          Print Report
        </button>
      </div>
      
      <div className="border rounded-lg overflow-hidden">
        <iframe
          ref={iframeRef}
          src={pdfUrl}
          width="100%"
          height="800px"
          className="border-0"
        />
      </div>
      
      <div className="mt-4 flex justify-end">
        <a
          href={pdfUrl}
          download="land-record-report.pdf"
          className="text-red-600 hover:text-red-800 font-medium"
        >
          Download PDF
        </a>
      </div>
    </div>
  );
}