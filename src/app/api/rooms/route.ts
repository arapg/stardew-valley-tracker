import { NextResponse } from "next/server"
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function GET(
    req: Request
) {
    try {
        const rooms = await prisma.room.findMany()
        return NextResponse.json(rooms)
    } catch (error) {
        console.log(error)
        return new NextResponse(
            'Something went wrong when getting the Community Center rooms',
            { status: 500 }
        )
    }
}