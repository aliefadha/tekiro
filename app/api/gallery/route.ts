import { NextResponse } from 'next/server';
import { galleryItems } from '@/lib/mock-data/gallery';

export async function GET() {
    return NextResponse.json({
        success: true,
        message: "Fetched successfully",
        data: galleryItems,
    });
}
