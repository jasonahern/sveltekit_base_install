<script lang="ts">
	export let color = '#4A5568'
	export let stroke = color
	export let filled = false
	export let fill = filled ? color : 'none'
	export let d = ''
	export let size = '1em'
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	class="icon"
	width={size}
	height={size}
	viewBox="0 0 24 24"
	stroke-width="2"
	{stroke}
	{fill}
	stroke-linecap="round"
	stroke-linejoin="round"
>
	<path stroke="none" d="M0 0h24v24H0z" fill="none" />
	<path {d} {stroke} fill="none" />
</svg>

<style>
	.icon {
		position: relative;
		display: inline-block;
	}
</style>
