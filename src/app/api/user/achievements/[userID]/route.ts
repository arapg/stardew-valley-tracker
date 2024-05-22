import { NextResponse } from "next/server"
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function GET(
    req: Request,
    { params }: { params: { userID: string } }
) {
    try {
        const items = await prisma.completedAchievement.findMany({
            where: { farmerId: params.userID }
        })
        return NextResponse.json(items)
    } catch (error) {
        console.log(error)
        return new NextResponse(
            `Something went wrong when getting the achievements.`,
            { status: 500 }
        )
    }
}