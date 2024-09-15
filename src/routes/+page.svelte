<script>
	import About from '$lib/components/About.svelte';
	import Certificate from '$lib/components/Certificate.svelte';
	import Header from '$lib/components/common/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Headline from '$lib/components/Headline.svelte';
	import Project from '$lib/components/Project.svelte';
</script>

<svelte:head>
	<title>Fathan Maulana</title>
	<meta name="description" content="Svelte Portfolio" />
</svelte:head>

<section>
	<Header title="davern." />
	<div class="container">
		<Headline />
		<About />
		<Project />
		<Certificate />
	</div>
	<button>
		
	</button>
	<Footer />
</section>

<style>
</style>
