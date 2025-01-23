<script>
	import About from '$lib/components/About.svelte';
	import Certificate from '$lib/components/Certificate.svelte';
	import Header from '$lib/components/common/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Headline from '$lib/components/Headline.svelte';
	import Project from '$lib/components/Project.svelte';
	import SvelteSeo from 'svelte-seo';
</script>

<SvelteSeo 
	title="Fathan Maulana"
	description="Fathan Maulana's portfolio created using SvelteKit"
	canonical="https://www.fathanmaul.my.id"
	keywords="Fathan Maulana, Portfolio, Svelte, Web Developer, Web Project"
	openGraph={{ 
		title: "Fathan Maulana",
		description: "Fathan Maulana's portfolio created using SvelteKit",
		images: [
			{
				alt: "github profile picture",
				url: "https://avatars.githubusercontent.com/u/94539481?v=4",
				type: "image",
				secure_url: "https://avatars.githubusercontent.com/u/94539481?v=4"
			}
		],
		url: "https://www.fathanmaul.my.id",
		type: "website",
	}}
/>

<svelte:head>
	<title>Fathan Maulana</title>
	
</svelte:head>

<section>
	<Header title="davern." />
	<div class="container">
		<Headline />
		<About />
		<Project />
		<Certificate />
	</div>
	<Footer />
</section>