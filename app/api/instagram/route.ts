import { NextResponse } from 'next/server';
import { instagramItems } from '@/lib/mock-data/instagram';

export async function GET() {
    return NextResponse.json({
        success: true,
        message: "Fetched successfully",
        data: instagramItems,
    });
}
