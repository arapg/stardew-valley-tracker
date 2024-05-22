import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function POST(
    req: Request
) {
    try {
        const { userID, achievementID } = await req.json()

        const completedAchievement = await prisma.completedAchievement.findUnique({
            where: {
                farmerId_id: {
                    farmerId: userID,
                    id: parseInt(achievementID)
                }
            }
        })

        if(completedAchievement) {
            await prisma.completedAchievement.delete({
                where: {
                    farmerId_id: {
                        farmerId: userID,
                        id: parseInt(achievementID)
                    }
                }
            })
            console.log(`Achievement with ID ${achievementID} was removed from user with ID ${userID}.`)
            return new NextResponse(
                'Achievement was deleted successfully',
                { status: 200 }
            )
        } else {
            await prisma.completedAchievement.create({
                data: {
                    id: parseInt(achievementID),
                    farmerId: userID
                }
            })
            console.log(`Achievement with ID ${achievementID} was added to user with ID ${userID}.`)
            return new NextResponse(
                'Achievement was completed successfully',
                { status: 200 }
            )
        }
    } catch (error) {
        console.error(error)
    } finally {
        await prisma.$disconnect()
      }
    
}