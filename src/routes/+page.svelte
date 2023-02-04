<script lang="ts">
	import favIcon from '$lib/components/icons/favicon.svg'
	import { enhance } from '$app/forms'
	import type { ActionData } from './$types'

	export let form: ActionData
</script>

<section class="bg-gray-50 dark:bg-gray-900">
	<div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
		<a href="/" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
			<img src={favIcon} alt="FavIcon" />Electronic Rostering Operational Support System
		</a>
		<div
			class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
		>
			<div class="p-4 space-y-4 md:space-y-4 sm:p-6">
				<h2
					class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
				>
					Sign in
				</h2>
				<form class="space-y-4 md:space-y-6" method="POST" use:enhance>
					<div>
						<label
							for="username"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>Enter Username</label
						>
						<input
							type="text"
							autocomplete="username"
							name="user"
							id="username"
							class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>Enter Password</label
						>
						<input
							type="password"
							autocomplete="current-password"
							name="password"
							id="password"
							placeholder="Enter Password"
							required
							class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						/>
						{#if form?.errors?.password}
							<p class="text-red-500">Password is Required</p>
						{/if}
					</div>
					<button
						type="submit"
						class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
						>Sign in</button
					>
				</form>
			</div>
		</div>
	</div>
</section>
