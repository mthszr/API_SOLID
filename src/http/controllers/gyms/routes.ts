import { verifyJWT } from '@/http/middlewares/verif-jwt'
import type { FastifyInstance } from 'fastify'

export async function gymsRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT)

  
}
