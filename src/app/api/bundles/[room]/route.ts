import { NextResponse } from "next/server"
import { PrismaClient } from '@prisma/client'
import { useParams } from "next/navigation"
const prisma = new PrismaClient()

export async function GET(
    req: Request,
    { params }: { params: { room: string } }
) {
    try {
        const bundles = await prisma.bundle.findMany({
            where: { roomName: params.room }
        })
        return NextResponse.json(bundles)
    } catch (error) {
        console.log(error)
        return new NextResponse(
            'Something went wrong when getting the Community Center room',
            { status: 500 }
        )
    }
} 