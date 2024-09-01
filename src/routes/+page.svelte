<script>
	import About from '$lib/components/About.svelte';
	import Certificate from '$lib/components/Certificate.svelte';
	import Header from '$lib/components/common/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Headline from '$lib/components/Headline.svelte';
	import Project from '$lib/components/Project.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
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

<style>
</style>
