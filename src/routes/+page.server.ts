import { fail, redirect, type Actions } from '@sveltejs/kit'
import { zfd } from 'zod-form-data'
import type { PageServerLoad } from './$types'
import { prisma } from '../hooks.server'

export const load = (async () => {
	const users = await prisma.users.findMany()
	return {
		post: users,
	}
}) satisfies PageServerLoad

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData()
		const loginSchema = zfd.formData({
			user: zfd.text(),
			password: zfd.text(),
		})

		const result = loginSchema.safeParse(formData)

		if (!result.success) {
			const data = {
				data: Object.fromEntries(formData),
				errors: result.error.flatten().fieldErrors,
			}
			return fail(400, data)
		}
		throw redirect(303, '/app')
	},
}
