<script lang="ts">
	import List from './certificate/List.svelte';
	import { certificate } from '$lib/data/certificate';
</script>

<div class="pb-[100px] mt-9 lg:mt-0" id="certificate">
	<h1 class="text-4xl font-semibold lg:text-5xl">Certificate</h1>

	<div class="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2 xl:grid-cols-4">
		{#each certificate as certificate_item}
			<div>
				<div
					class="w-[300px] mx-auto md:mx-0 md:w-[80%] lg:w-full lg:h-[250px] lg:mx-0 overflow-auto"
				>
					<img src={certificate_item.image} alt="" class="object-cover w-full h-full" />
				</div>
				<p class="mt-2 text-lg font-semibold text-center md:text-start lg:text-center">
					{certificate_item.name}
				</p>
				<p class="text-sm text-center md:text-start lg:text-center">
					{certificate_item.organization}
				</p>
			</div>
		{/each}
	</div>
</div>
