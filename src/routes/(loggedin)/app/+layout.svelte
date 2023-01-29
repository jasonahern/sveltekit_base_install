<script lang="ts">
	// import '@skeletonlabs/skeleton/themes/theme-crimson.css'
	// import '@skeletonlabs/skeleton/styles/all.css'
	// import '../app.postcss'
	import SvgIcon from '$lib/components/icons/SvgIcon.svelte'
	import { keyIcon, logoutIcon, userIcon } from '$lib/components/icons/AppIcons'
	import { AppShell, AppBar, LightSwitch, menu } from '@skeletonlabs/skeleton'

	const exampleLink = '/utilities/menus'
	function log(v: any): void {
		alert(`Clicked ${v}`)
	}
</script>

<!-- App Shell -->
<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">Skeleton</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
					class="btn btn-sm btn-ghost-surface"
					href="https://discord.gg/EXqV7W8MtY"
					target="_blank"
					rel="noreferrer">Discord</a
				>
				<a
					class="btn btn-sm btn-ghost-surface"
					href="https://twitter.com/SkeletonUI"
					target="_blank"
					rel="noreferrer">Twitter</a
				>
				<span class="relative">
					<button class="btn p-2 variant-ghost-surface" use:menu={{ menu: 'navigation' }}
						><SvgIcon d={userIcon} fill="black" /></button
					>
					<nav class="list-nav card p-2 w-auto shadow-xl" data-menu="navigation">
						<ul>
							<li>
								<a href="/"
									><div class="pr-2"><SvgIcon d={logoutIcon} fill="black" /></div>
									Log Out</a
								>
							</li>
							<li>
								<a href="/app/changePassword"
									><div class="pr-2"><SvgIcon d={keyIcon} fill="black" /></div>
									Change Password</a
								>
							</li>
						</ul>
					</nav>
				</span>
				<LightSwitch />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
