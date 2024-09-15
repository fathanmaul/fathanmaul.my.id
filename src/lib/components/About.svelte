<script>
	import { educations } from '$lib/data/education';
	import Education from './about/Education.svelte';
	import Skills from './about/Skills.svelte';
	import { hardSkills, softSkills } from '$lib/data/skills';
	import { Icon } from 'svelte-icons-pack';
	import { FaBrandsFacebook, FaBrandsLinkedin, FaBrandsGithub, FaBrandsInstagram } from 'svelte-icons-pack/fa';
	import { IoMail } from 'svelte-icons-pack/io';
	const edu = educations;

	
</script>

<div class="mt-[300px]" id="about">
	<h1 class="text-4xl font-semibold lg:text-5xl">About Me</h1>
	<div class="flex flex-col-reverse justify-between gap-8 mt-12 lg:flex-row">
		<div class="flex flex-col gap-6 text-lg md:max-w-2xl">
			<p class="font-normal text-neutral-800">
				An undergraduate student majoring in Informatics Engineering at the State Polytechnic of
				Jember. I am a detail-oriented and dedicated individual with a focus on Front-End
				Development. I have hands-on experience with HTML, CSS, JavaScript, and various front-end
				frameworks.
			</p>
			<p class="font-normal text-neutral-800">
				I am dedicated to continuous learning, staying up-to-date with the latest trends in web
				development. In addition, I am currently expanding my skill set by learning Kotlin for
				Android app development, which allows me to bring a unique perspective to every project I
				undertake.
			</p>
			<div class="my-5">
				<a href="CV_FATHAN.pdf" class="px-4 py-3 text-white bg-neutral-800">Download CV</a>
			</div>
			<div class="flex items-center gap-4">
				<a href="mailto:fthnmrh012@gmail.com">
					<Icon src={IoMail} className="text-3xl" />
				</a>
				<a href="https://www.facebook.com/Extinctly" target="_blank">
					<Icon src={FaBrandsFacebook} className="text-2xl" />
				</a>
				<a href="https://www.linkedin.com/in/fathanmaul" target="_blank">
					<Icon src={FaBrandsLinkedin} className="text-2xl" />
				</a>
				<a href="https://www.github.com/fathanmaul" target="_blank">
					<Icon src={FaBrandsGithub} className="text-2xl" />
				</a>
				<a href="https://www.instagram.com/fthan.maul" target="_blank">
					<Icon src={FaBrandsInstagram} className="text-2xl" />
				</a>
			</div>
			<Education educations={edu} />
			<Skills {hardSkills} {softSkills} />
		</div>
		<div class="w-[80%] mx-auto lg:mx-0 h-auto lg:w-[500px] lg:relative lg:-top-12">
			<img src="https://avatars.githubusercontent.com/u/94539481?v=4" alt="Profile" />
		</div>
	</div>
</div>
