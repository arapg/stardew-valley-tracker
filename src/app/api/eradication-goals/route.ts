import { NextResponse } from "next/server"
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function GET(
    req: Request
) {
    try {
        const monsterEradicationGoals = await prisma.monsterEradicationGoal.findMany()
        return NextResponse.json(monsterEradicationGoals)
    } catch (error) {
        console.log(error)
        return new NextResponse(
            'Something went wrong when getting the Monster Eradication Goals',
            { status: 500 }
        )
    }
}