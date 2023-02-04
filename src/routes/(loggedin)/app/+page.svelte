<script lang="ts">
	//import type { PageData } from '../../$types'
	import SvgIcon from '$lib/components/icons/SvgIcon.svelte'
	import { copyIcon } from '$lib/components/icons/SvgIcon'
</script>

Logged in

<div class="container mx-auto flex h-full items-center justify-center">
	<h1>Let's get cracking bones!</h1>
	<button class="btn variant-filled-primary"><SvgIcon d={copyIcon} fill="black" />Test</button>
</div>
