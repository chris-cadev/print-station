<script lang="ts">
	import MosaicFileNavigator from '../files/MosaicFileNavigator.svelte';
	import TableFileNavigatorcopy from '../files/TableFileNavigator copy.svelte';
	import Icon from '@iconify/svelte';

	export let mode = 'table';

	function toggleMode() {
		mode = mode === 'table' ? 'mosaic' : 'table';
	}
</script>

<button on:click={toggleMode}><Icon icon="ri:table-2" /></button>

<div role="separator"><h1>---</h1></div>

{#if mode === 'table'}
	<table>
		<TableFileNavigatorcopy />
	</table>
{:else}
	<div class="mosaic">
		<MosaicFileNavigator />
	</div>
{/if}

<style lang="scss">
</style>
