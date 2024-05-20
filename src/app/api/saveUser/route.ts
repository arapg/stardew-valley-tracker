import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function POST(req: Request) {
    const {user} = await req.json();

    if (!user) {
        return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    const { sub, name } = await user;
    
    try {
        await prisma.farmer.upsert({
            where: { id: sub },
            update: { username: name },
            create: {
            id: sub,
            username: name,
            },
        });
    
        return NextResponse.json({ message: 'User saved/updated successfully' });
        } catch (error) {
        console.error('Error saving user to database:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
        }
        
        

}