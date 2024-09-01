<script lang="ts">
	export let id: string;
	export let project: Project;
</script>

<div class="min-h-[473px] mt-[20px]">
	<div class="flex flex-col-reverse gap-4 lg:gap-0 lg:justify-between lg:flex-row">
		<div class="flex flex-col max-w-xl gap-4">
			<h5 class="text-lg font-medium">
				{id.length === 1 ? `0${id}` : id} / {project.name.toUpperCase()}
			</h5>
			<h6 class="text-neutral-700">
				{project.description}
			</h6>
			<p>
				<span class="font-semibold">Role:</span>
				{project.role}
			</p>
			<p>
				<span class="font-semibold">Techstack: </span>
				{#each project.technologies as tech}
					<span class="mr-1">{tech} |</span>
				{/each}
			</p>
		</div>
		<div class="w-full h-[200px] lg:h-[364px] lg:w-[640px] bg-slate-500">
			{#if project.thumbnail}
				<img src={project.thumbnail} alt="" class="object-cover w-full h-full" />
			{:else}
				<div class="flex items-center justify-center w-full h-full bg-black">
					<p class="text-2xl text-white">No Thumbnail Avaliable</p>
				</div>
			{/if}
		</div>
	</div>

	<!-- Make Line Separate -->
	<div class="mt-16 border-b border-neutral-800"></div>
</div>
