import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function POST(
    req: Request
) {
    try {
        const { userID, monsterID } = await req.json()

        const completedMonsterEradicationGoal = await prisma.completedMonsterEradicationGoal.findUnique({
            where: {
                farmerId_id: {
                    farmerId: userID,
                    id: parseInt(monsterID)
                }
            }
        })

        if(completedMonsterEradicationGoal) {
            await prisma.completedMonsterEradicationGoal.delete({
                where: {
                    farmerId_id: {
                        farmerId: userID,
                        id: parseInt(monsterID)
                    }
                }
            })
            console.log(`MonsterEradicationGoal with ID ${monsterID} was removed from user with ID ${userID}.`)
            return new NextResponse(
                'MonsterEradicationGoal was deleted successfully',
                { status: 200 }
            )
        } else {
            await prisma.completedMonsterEradicationGoal.create({
                data: {
                    id: parseInt(monsterID),
                    farmerId: userID
                }
            })
            console.log(`MonsterEradicationGoal with ID ${monsterID} was added to user with ID ${userID}.`)
            return new NextResponse(
                'MonsterEradicationGoal was completed successfully',
                { status: 200 }
            )
        }
    } catch (error) {
        console.error(error)
    } finally {
        await prisma.$disconnect()
      }
    
}