import { NextResponse } from "next/server"
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function GET(
    req: Request,
    { params }: { params: { userID: string } }
) {
    try {
        const profilePicture = await prisma.farmer.findUnique({
            where: { id: params.userID },
            select: { profilePicture: true }
        });

        return NextResponse.json(profilePicture?.profilePicture);
    } catch (error) {
        console.log(error)
        return new NextResponse(
            `Something went wrong when getting the profile picture.`,
            { status: 500 }
        )
    }
}