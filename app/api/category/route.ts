import { NextResponse } from 'next/server';
import { categories } from '@/lib/mock-data/categories';

export async function GET() {
    return NextResponse.json({
        success: true,
        message: "Fetched successfully",
        data: categories,
    });
}
