<script>
	import { projects as project_list } from '$lib/data/project';
	import ProjectItem from './project/Item.svelte';
	const projects = project_list;
</script>

<div class="lg:mt-[100px]" id="projects">
	<h1 class="text-4xl font-semibold lg:text-5xl">Project</h1>

	{#each projects as project}
		<ProjectItem id={project.id.toString()} {project} />
	{/each}
</div>
