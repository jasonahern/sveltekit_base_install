import type { Handle } from '@sveltejs/kit'
import { PrismaClient } from '@prisma/client'
export const prisma = new PrismaClient()

export const handle = (async ({ event, resolve }) => {
	if (event.url.pathname.startsWith('/custom')) {
		return new Response('custom response')
	}

	const response = await resolve(event)
	return response
}) satisfies Handle
