import { getAllLandRecords } from '@/lib/database';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const records = await getAllLandRecords();
    return NextResponse.json(records);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch land records' },
      { status: 500 }
    );
  }
}