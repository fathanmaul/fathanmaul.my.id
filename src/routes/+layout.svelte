<script>
	import '../app.css';
	import '@fontsource-variable/inter';
	import '@fontsource-variable/dm-sans';
</script>

<div class="app">
	<main>
		<slot />
	</main>
</div>

<style>
	:global(body) {
		font-family: 'DM Sans Variable', sans-serif, monospace;
	}
</style>
