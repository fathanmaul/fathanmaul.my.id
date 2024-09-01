<script>
	import { Icon } from 'svelte-icons-pack';
	import { RiLogosSvelteFill } from 'svelte-icons-pack/ri';
</script>

<!-- Footer -->
<footer class="footer">
	<div class="container py-6">
		<div class="grid grid-cols-8">
			<div class="col-span-4">
				<p class="font-notmal text-neutral-700">Fathan Maulana - 2024</p>
			</div>
			<div class="flex items-center justify-end col-span-4 gap-1">
				<p>Made with</p>
				<Icon src={RiLogosSvelteFill} className="text-2xl text-red-500" />
			</div>
		</div>
	</div>
</footer>
