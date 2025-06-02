import { NextResponse } from 'next/server';
import { getProfileConfig } from '@/lib/config';

export async function GET() {
  try {
    const config = await getProfileConfig();

    return NextResponse.json({
      success: true,
      data: config,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error fetching profile config:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch profile configuration',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
}

export async function POST() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
