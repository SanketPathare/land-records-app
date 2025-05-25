import { getLandRecordById } from '@/lib/database';
import { generatePdf } from '@/lib/pdfGenerator';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { recordId } = await request.json();
    const record = await getLandRecordById(recordId);
    
    if (!record) {
      return NextResponse.json(
        { error: 'Record not found' },
        { status: 404 }
      );
    }
    
    const pdfBytes = await generatePdf(record);
    
    return new NextResponse(pdfBytes, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="land-record-${record.propertyId}.pdf"`
      }
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to generate report' },
      { status: 500 }
    );
  }
}