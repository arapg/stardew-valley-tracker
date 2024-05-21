import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function POST(
    req: Request,
    { params }: { params: { itemID: string, userID: string } }
) {
    try {
        const completedItem = await prisma.completedItem.findUnique({
            where: {
                farmerId_id: {
                    farmerId: params.userID,
                    id: parseInt(params.itemID)
                }
            }
        })

        if(completedItem) {
            await prisma.completedItem.delete({
                where: {
                    farmerId_id: {
                        farmerId: params.userID,
                        id: parseInt(params.itemID)
                    }
                }
            })
            console.log(`Item with ID ${params.itemID} was removed from user with ID ${params.userID}.`)
            return new NextResponse(
                'Item was deleted successfully',
                { status: 200 }
            )
        } else {
            await prisma.completedItem.create({
                data: {
                    id: parseInt(params.itemID),
                    farmerId: params.userID
                }
            })
            console.log(`Item with ID ${params.itemID} was added to user with ID ${params.userID}.`)
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