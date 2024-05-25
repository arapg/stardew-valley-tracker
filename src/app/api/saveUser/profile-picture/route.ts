import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function POST(req: Request) {
    const { userID, profilePicture } = await req.json();

    if (!userID) {
        return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    try {
        const updatedUser = await prisma.farmer.update({
            where: { id: userID },
            data: { profilePicture: profilePicture },
        });
        return NextResponse.json({ success: true, user: updatedUser });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update profile picture' }, { status: 500 });
    }


}