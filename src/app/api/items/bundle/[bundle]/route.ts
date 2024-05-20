import { NextResponse } from "next/server"
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function GET(
    req: Request,
    { params }: { params: { bundle: string } }
) {
    try {
        const items = await prisma.item.findMany({
            where: { bundleName: params.bundle }
        })
        return NextResponse.json(items)
    } catch (error) {
        console.log(error)
        return new NextResponse(
            `Something went wrong when getting the Items for the ${params.bundle} Bundle.`,
            { status: 500 }
        )
    }
}