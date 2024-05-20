import { NextResponse } from "next/server"
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function GET(
    req: Request,
    { params }: { params: { itemID: string } }
) {
    try {
        const items = await prisma.item.findUnique({
            where: { id: (parseInt(params.itemID)) }
        })
        return NextResponse.json(items)
    } catch (error) {
        console.log(error)
        return new NextResponse(
            `Something went wrong when getting the item.`,
            { status: 500 }
        )
    }
}