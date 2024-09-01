<script lang="ts">
	export let educations: Education[];
</script>

<div class="mt-12 lg:mt-6">
	<h3 class="text-2xl font-semibold lg:text-4xl">Education</h3>
	<ul class="flex flex-col mt-6">
		{#each educations as education}
			<li class="flex gap-3">
				<div class="flex flex-col items-center w-5">
					<div class="w-5 h-5 rounded-full bg-slate-800"></div>
					<div class="flex-1 w-1 bg-slate-800"></div>
				</div>
				<div class="pb-5">
					<h4 class="text-xl font-semibold lg:text-2xl">{education.school}</h4>
					<p class="text-base lg:text-lg text-neutral-800">{education.name}</p>
					<p class="text-base lg:text-lg text-neutral-800">
						<span>{education.startYear}</span> - {education.endYear ?? 'Present'}
					</p>
				</div>
			</li>
		{/each}
	</ul>
</div>
