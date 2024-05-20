import { NextResponse } from "next/server"
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function GET(
    req: Request,
    { params }: { params: { room: string } }
) {
    try {
        const bundles = await prisma.bundle.findMany({
            where: { roomName: params.room}
        })
        const bundleNames = bundles.map(bundle => bundle.name);

        const itemPromises = bundleNames.map(bundleName =>
            prisma.item.findMany({
                where: { bundleName }
            })
        );
        const itemsArray = await Promise.all(itemPromises);

        return NextResponse.json(itemsArray)
    } catch (error) {
        console.log(error)
        return new NextResponse(
            `Something went wrong when getting the Items for the ${params.room}.`,
            { status: 500 }
        )
    }
}