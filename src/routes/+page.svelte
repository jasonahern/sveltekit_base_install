<script lang="ts">
	import SvgIcon from '$lib/components/icons/SvgIcon.svelte'
	import { heartIcon, copyIcon } from '$lib/components/icons/AppIcons'
	import { enhance } from '$app/forms'
	import type { ActionData } from './$types'

	export let form: ActionData
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="card variant-ringed-secondary p-4">
		<div class="card-header pt-0">Please Login</div>

		<h1>Forms</h1>

		<form method="POST" use:enhance>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto] mb-8">
				<div class="input-group-shim">Username</div>
				<input
					type="text"
					name="user"
					placeholder="Enter Username ...."
					value={form?.data?.user ?? ''}
				/>
				{#if form?.errors?.user}
					<div class="variant-filled-error">Name is Required</div>
				{/if}
			</div>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto] mb-8">
				<div class="input-group-shim">Password</div>
				<input type="password" name="password" placeholder="Enter Password ...." />
			</div>
			{#if form?.errors?.password}
				<p class="variant-filled-error">Password is Required</p>
			{/if}
			<button class="btn variant-filled-primary" type="submit">Login</button>
		</form>
	</div>
</div>
