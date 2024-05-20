import { NextResponse } from "next/server"
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function GET(
    req: Request
) {
    try {
        const items = await prisma.item.findMany()
        return NextResponse.json(items)
    } catch (error) {
        console.log(error)
        return new NextResponse(
            'Something went wrong when getting the Community Center Items',
            { status: 500 }
        )
    }
}