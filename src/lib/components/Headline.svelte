<script lang="ts">
	import { Icon } from 'svelte-icons-pack';
	import { FaSolidArrowDown } from 'svelte-icons-pack/fa';
	import 'animate.css';
</script>

<div class="flex flex-col justify-center min-h-screen" id="#">
	<div class="flex flex-col justify-between gap-5 lg:flex-row lg:items-center md:gap-0">
		<div>
			<h2 class="text-4xl font-semibold lg:text-6xl animate__animated animate__fadeInDown">
				Hello, I&apos;m <br />
				Fathan Maulana
			</h2>
		</div>
		<div>
			<h2 class="text-xl font-normal lg:text-3xl text-neutral-500 animate__animated animate__fadeInDown animation-delay-500">
				An undergraduated student who trying <br class="hidden md:block" />
				to be proficient as Front-End Developer
			</h2>
		</div>
	</div>

	<div
		class="mt-16 animate-bounce"
		style="animation: bounceY is infinite; transform: translateY(0);"
	>
		<Icon src={FaSolidArrowDown} className="text-4xl" />
	</div>
</div>

<style>
	@keyframes bounceY {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(10px);
		}
	}
</style>
