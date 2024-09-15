<script lang="ts">
	import { onMount } from 'svelte';

	export let title: string;
	const nav_list = [
		{
			name: 'Home',
			link: '#'
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

	function handleAnchorScroll(event: Event) {
		event.preventDefault();
		const link = event.currentTarget as HTMLAnchorElement;
		const anchorId = new URL(link.href).hash.replace('#', '');
		const anchor = document.getElementById(anchorId);
		if (anchor) {
			window.scrollTo({
				top: anchor.offsetTop - 120,
				behavior: 'smooth'
			});
		}
	}

	let isScrolled = false;

	const handleScroll = () => {
		if (window.scrollY > 10) {
			isScrolled = true;
		} else {
			isScrolled = false;
		}
	};

	onMount(() => {
		if (window.scrollY > 10) {
			isScrolled = true;
		}
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<div
	class="sticky top-0 z-50 py-4 lg:py-8 mx-auto navbar transition-all duration-300 {isScrolled
		? 'bg-white/70 backdrop-blur-md'
		: 'bg-inherit'}"
	id="navbar"
>
	<div class="container">
		<div class="flex flex-row items-center justify-between">
			<div class="">
				<h2 class="text-2xl font-medium lg:text-3xl">{title}</h2>
			</div>
			<div class="hidden lg:block">
				<div class="">
					<ul class="flex gap-6">
						{#each nav_list as nav}
							<li>
								<a
									href={`#${nav.link}`}
									class="font-semibold lg:text-xl"
									on:click={handleAnchorScroll}
								>
									{nav.name}
								</a>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
		
	</div>

</div>
