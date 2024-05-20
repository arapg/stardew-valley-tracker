// import { getSession } from '@auth0/nextjs-auth0'
// import { PrismaClient } from '@prisma/client'
// import { NextRequest, NextResponse } from 'next/server'

// const prisma = new PrismaClient()

// export async function POST(req: Request) {
//     const { user } = await getSession(req, Response)
  
//     if (!user) {
//         return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
//       }
    
//       const { sub, name } = user; // 'sub' is the Auth0 user ID
//   try {
//     await prisma.farmer.upsert({
//       where: { id: sub },
//       update: { username: name },
//       create: {
//         id: sub,
//         username: name,
//       },
//     });

//     return NextResponse.json({ message: 'User saved/updated successfully' });
//   } catch (error) {
//     console.error('Error saving user to database:', error);
//     return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
//   }
// }

import { NextRequest, NextResponse } from 'next/server'
import { withMiddlewareAuthRequired } from '@auth0/nextjs-auth0/edge'
import { PrismaClient } from '@prisma/client'
import { getSession } from '@auth0/nextjs-auth0'

const prisma = new PrismaClient()

export default withMiddlewareAuthRequired(async (req: NextRequest) => {
  const res = NextResponse.next()

  const user = await getSession(req, res)

  if (!user) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
  }
  const { sub, name } = user // 'sub' is the Auth0 user ID
  try {
    await prisma.farmer.upsert({
      where: { id: sub },
      update: { username: name },
      create: {
        id: sub,
        username: name,
      },
    })

    return NextResponse.json({ message: 'User saved/updated successfully' })
  } catch (error) {
    console.error('Error saving user to database:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
});

// only work on the '/' path
export const config = {
    matcher: '/',
  };
