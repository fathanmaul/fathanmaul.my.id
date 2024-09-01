<script lang="ts">
	export let title: string;
	const nav_list = [
		{
			name: 'Home',
			link: ''
		},
		{
			name: 'About',
			link: 'about'
		},
		{
			name: 'Projects',
			link: 'projects'
		},
		{
			name: 'Certificate',
			link: 'certificate'
		}
	];
</script>

<div class="container py-[25px] lg:py-[50px]">
	<div class="flex flex-row items-center justify-between">
		<div class="">
			<h2 class="text-2xl font-medium lg:text-4xl">{title}</h2>
		</div>
		<div class="hidden lg:block">
			<div class="">
				<ul class="flex gap-6">
					{#each nav_list as nav}
						<li>
							<a href={`#${nav.link}`} class="font-semibold lg:text-xl">
								{nav.name}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</div>
