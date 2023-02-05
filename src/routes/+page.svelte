<script lang="ts">
	import SvgFavIcon from '$lib/components/icons/SvgFavIcon.svelte'
	import { enhance } from '$app/forms'
	import type { ActionData, PageServerData } from './$types'
	export let data: PageServerData
	export let form: ActionData
	console.log(data)
</script>

<pre>{data?.post[0].username}</pre>
<section class="bg-gray-50 dark:bg-gray-900">
	<div class="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
		<a href="/" class="mb-6 flex items-center text-2xl font-semibold text-gray-900 dark:text-white">
			<SvgFavIcon />Electronic Rostering Operational Support System
		</a>
		<div
			class="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0"
		>
			<div class="space-y-4 p-4 sm:p-6 md:space-y-4">
				<h2
					class="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl"
				>
					Sign in
				</h2>
				<form class="space-y-4 md:space-y-6" method="POST" use:enhance>
					<div>
						<label
							for="username"
							class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
							>Enter Username</label
						>
						<input
							type="text"
							autocomplete="username"
							name="user"
							id="username"
							class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
							placeholder="Username"
							required
							value={form?.data?.user ?? ''}
						/>
						{#if form?.errors?.user}
							<div class="text-red-500">Username is Required</div>
						{/if}
					</div>
					<div>
						<label
							for="password"
							class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
							>Enter Password</label
						>
						<input
							type="password"
							autocomplete="current-password"
							name="password"
							id="password"
							placeholder="Enter Password"
							required
							class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
						/>
						{#if form?.errors?.password}
							<p class="text-red-500">Password is Required</p>
						{/if}
					</div>
					<button
						type="submit"
						class="w-full rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
						>Sign in</button
					>
				</form>
			</div>
		</div>
	</div>
</section>
