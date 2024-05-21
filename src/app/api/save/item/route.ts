import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function POST(
    req: Request
) {
    try {
        const { userID, itemID } = await req.json()

        const completedItem = await prisma.completedItem.findUnique({
            where: {
                farmerId_id: {
                    farmerId: userID,
                    id: parseInt(itemID)
                }
            }
        })

        if(completedItem) {
            await prisma.completedItem.delete({
                where: {
                    farmerId_id: {
                        farmerId: userID,
                        id: parseInt(itemID)
                    }
                }
            })
            console.log(`Item with ID ${itemID} was removed from user with ID ${userID}.`)
            return new NextResponse(
                'Item was deleted successfully',
                { status: 200 }
            )
        } else {
            await prisma.completedItem.create({
                data: {
                    id: parseInt(itemID),
                    farmerId: userID
                }
            })
            console.log(`Item with ID ${itemID} was added to user with ID ${userID}.`)
            return new NextResponse(
                'Item was completed successfully',
                { status: 200 }
            )
        }
    } catch (error) {
        console.error(error)
    } finally {
        await prisma.$disconnect()
      }
    
}