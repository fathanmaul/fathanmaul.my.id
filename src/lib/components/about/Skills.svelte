<script lang="ts">
	export let hardSkills: Skill[];
	export let softSkills: Skill[];
</script>

<div class="mt-12 lg:mt-6">
	<h2 class="mb-4 text-2xl font-semibold lg:text-4xl">Skills</h2>
	<div class="grid grid-cols-1">
		<div class="grid gap-2 lg:grid-cols-2">
			<div>
				<p class="underline">Hard Skills</p>
			</div>
			<div>
				<ul class="flex flex-wrap gap-1">
					{#each hardSkills as skill, i}
						<li>
							<p>
								{i === hardSkills.length - 1 ? skill.name : `${skill.name},`}
							</p>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
	<div class="grid grid-cols-1 grid-rows-2 mt-4 ">
		<div class="grid gap-2 lg:grid-cols-2">
			<div>
				<p class="underline">Soft Skills</p>
			</div>
			<div>
				<ul class="flex flex-wrap gap-1">
					{#each softSkills as skill, i}
						<li>
							<p>
								{i === softSkills.length - 1 ? skill.name : `${skill.name},`}
							</p>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</div>
