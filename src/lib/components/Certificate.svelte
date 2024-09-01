<script lang="ts">
	import List from './certificate/List.svelte';
	import { certificate } from '$lib/data/certificate';
</script>

<div class="pb-[100px] mt-9 lg:mt-0" id="certificate">
	<h1 class="text-4xl font-semibold lg:text-5xl">Certificate</h1>

	<div class="grid grid-cols-1 gap-4 mt-4 lg:grid-cols-4">
		<List {certificate} />
	</div>
</div>
