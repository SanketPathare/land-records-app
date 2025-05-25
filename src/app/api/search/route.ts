import { searchLandRecords } from '@/lib/database';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { parcelNumber, ownerName, address } = await request.json();
    
    const results = await searchLandRecords({
      parcelNumber,
      ownerName,
      address
    });
    
    return NextResponse.json(results);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to search land records' },
      { status: 500 }
    );
  }
}