<script>
	import { Icon } from 'svelte-icons-pack';
	import { RiLogosSvelteFill } from 'svelte-icons-pack/ri';

	const currentYear = new Date();
</script>

<!-- Footer -->
<footer class="footer">
	<div class="container py-6">
		<div class="grid grid-cols-8">
			<div class="col-span-4">
				<p class="font-notmal text-neutral-700">Fathan Maulana - {currentYear.getFullYear()}</p>
			</div>
			<div class="flex items-center justify-end col-span-4 gap-1">
				<p>Made with</p>
				<a href="https://svelte.dev/" id="link-to-svelte" data-name="link-to-svelte" aria-label="Link access to svelte-kit offial website">
					<Icon src={RiLogosSvelteFill} className="text-2xl text-red-500" />
				</a>
			</div>
		</div>
	</div>
</footer>
