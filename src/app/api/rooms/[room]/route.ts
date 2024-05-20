import { NextResponse } from "next/server"
import { PrismaClient } from '@prisma/client'
import { useParams } from "next/navigation"
const prisma = new PrismaClient()

export async function GET(
    req: Request,
    { params }: { params: { room: string } }
) {
    try {
        const room = await prisma.room.findUnique({
            where: { name: params.room }
        })
        return NextResponse.json(room)
    } catch (error) {
        console.log(error)
        return new NextResponse(
            'Something went wrong when getting the Community Center room',
            { status: 500 }
        )
    }
} 