import { betterAuth } from 'better-auth'
import { prismaAdapter } from 'better-auth/adapters/prisma'
import { createAuthMiddleware } from 'better-auth/api'
import { db } from './prisma'

export const auth = betterAuth({
  database: prismaAdapter(db, {
    provider: 'postgresql',
  }),
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 60 * 10,
    },
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  hooks: {
    after: createAuthMiddleware(async (ctx) => {
      const session = ctx.context.newSession
      if (!session) return

      const userId = session.user.id

      // Check if subscription exists
      const existing = await db.subscription.findUnique({
        where: { userId },
      })

      if (!existing) {
        console.log('Creating subscription for user:', userId)
        await db.subscription.create({
          data: {
            userId,
            plan: 'free',
            status: 'active',
            currentPeriodEnd: null,
          },
        })
      } else {
        console.log('Subscription already exists for user:', userId)
      }
    }),
  },
})
