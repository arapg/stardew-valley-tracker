import { NextResponse } from "next/server"
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function GET(
    req: Request,
    { params }: { params: { roomName: string } }
) {
    try {
        const bundles = await prisma.bundle.findMany()
        return NextResponse.json(bundles)
    } catch (error) {
        console.log(error)
        return new NextResponse(
            'Something went wrong when getting the Community Center Bundles',
            { status: 500 }
        )
    }
}