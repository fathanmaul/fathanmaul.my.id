<script lang="ts">
	export let certificate: Certificate[];
</script>

{#each certificate as certificate_item}
	<div>
		<div class="w-[300px] mx-auto md:mx-0 md:w-[80%] lg:w-full lg:h-[250px] lg:mx-0 overflow-auto">
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
