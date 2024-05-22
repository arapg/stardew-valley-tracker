import { NextResponse } from "next/server"
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function GET(
    req: Request
) {
    try {
        const achievements = await prisma.achievement.findMany()
        return NextResponse.json(achievements)
    } catch (error) {
        console.log(error)
        return new NextResponse(
            'Something went wrong when getting the Achievements',
            { status: 500 }
        )
    }
}