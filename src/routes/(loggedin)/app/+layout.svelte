<script lang="ts">
	import SvgIcon from '$lib/components/icons/SvgIcon.svelte'
	import { keyIcon, logoutIcon, userIcon } from '$lib/components/icons/SvgIcon'
	import SvgFavIcon from '$lib/components/icons/SvgFavIcon.svelte'
	import { AppShell, AppBar, LightSwitch, AccordionItem, Accordion, storePopup, popup } from '@skeletonlabs/skeleton'
	import type { PopupSettings } from '@skeletonlabs/skeleton'
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom'
	import SvgRefDataIcon from '$lib/components/icons/SvgRefDataIcon.svelte'

	const exampleLink = '/utilities/menus'
	function log(v: any): void {
		alert(`Clicked ${v}`)
	}
	//pop menu configuration
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow })
	let exampleSettings: PopupSettings = {
		// Set the event as: click | hover | hover-click
		event: 'click',
		// Provide a matching 'data-popup' value.
		target: 'examplePopup',
	}
</script>

<!-- App Shell -->
<AppShell slotSidebarLeft="bg-surface-400/5 w-42 p-2">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<SvgFavIcon />
				<strong class="text-xl uppercase">EROSS</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a class="btn-ghost-surface btn btn-sm" href="https://discord.gg/EXqV7W8MtY" target="_blank" rel="noreferrer">
					Discord
				</a>
				<a class="btn-ghost-surface btn btn-sm" href="https://twitter.com/SkeletonUI" target="_blank" rel="noreferrer">
					Twitter
				</a>
				<span class="relative">
					<button class="btn variant-ghost-surface p-2" use:popup={exampleSettings}
						><SvgIcon d={userIcon} fill="black" />
					</button>
					<nav class="card list-nav w-auto p-2 shadow-xl" data-popup="examplePopup">
						<ul>
							<li>
								<a href="/"
									><div class="pr-2"><SvgIcon d={logoutIcon} fill="black" /></div>
									Log Out
								</a>
							</li>
							<li>
								<a href="/app/changePassword"
									><div class="pr-2"><SvgIcon d={keyIcon} fill="black" /></div>
									Change Password
								</a>
							</li>
						</ul>
					</nav>
				</span>
			</svelte:fragment>
			<svelte:fragment>
				<LightSwitch />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<!-- Hidden below Tailwind's large breakpoint -->
		<div id="sidebar-left" class="m-0 p-0 text-xs">
			<Accordion autocollapse>
				<AccordionItem open caretClosed="-rotate-90" caretOpen="-rotate-60">
					<svelte:fragment slot="lead"><SvgRefDataIcon /></svelte:fragment>
					<svelte:fragment slot="summary">Ref Data</svelte:fragment>
					<svelte:fragment slot="content">
						<div class="inline-flex flex-col">
							<button id="refData:Password" class="btn variant-filled-primary mb-1 text-xs">Password Settings</button>
							<button id="refData:IgnoreReasons" class="btn variant-filled-primary mb-1 text-xs">Ignore Reasons</button>
						</div>
					</svelte:fragment>
				</AccordionItem>
				<AccordionItem caretClosed="-rotate-90" caretOpen="-rotate-60">
					<svelte:fragment slot="lead">(icon)</svelte:fragment>
					<svelte:fragment slot="summary">(summary)</svelte:fragment>
					<svelte:fragment slot="content">(content)</svelte:fragment>
				</AccordionItem>
			</Accordion>
		</div>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
