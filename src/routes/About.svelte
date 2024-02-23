<script lang="ts">
	import { onMount } from 'svelte';
	import { scale, blur } from 'svelte/transition';
	let transition: boolean = false;
	let greeting: string = '';
	var i = 0;
	var txt = `Hello, I'm Sarthak`;
	var speed = 50;

	function typeWriter() {
		if (i < txt.length) {
			greeting += txt.charAt(i);
			i++;
			setTimeout(typeWriter, speed);
		}
	}
	onMount(async () => {
		transition = true;
		setTimeout(typeWriter, 2000);
	});
</script>

{#if transition}
	<section>
		<div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
			<div class="mr-auto place-self-center lg:col-span-7">
				<p
					class="max-w-2xl mb-4 text-4xl font-exo2 font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white"
				>
					{greeting}
				</p>
				<div transition:blur={{ delay: 2100, duration: 3000 }}>
					<p class="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-gray-400">
						As a backend and CLI developer, I'm on a constant quest to explore and innovate in the
						tech world. With a strong focus on API development and backend services management, I'm
						passionate about creating efficient solutions that drive digital innovation. I actively
						contribute to open-source projects, constantly expanding my skill set and making
						meaningful contributions to the community.
					</p>
					<a
						href="#projects"
						class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-[#45A29E] focus:ring-primary-900"
					>
						<i class="bi bi-lightbulb-fill" />&nbsp;&nbsp;My Projects
					</a>
					<a
						href="/stats"
						class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-[#45A29E] focus:ring-primary-900"
					>
						<i class="bi bi-pie-chart-fill" />&nbsp;&nbsp;Statistics
					</a>
				</div>
			</div>
			<div
				transition:scale={{ delay: 300, duration: 2000 }}
				class="hidden lg:mt-0 lg:col-span-5 lg:flex"
			>
				<img src="/site_banner.png" alt="mockup" />
			</div>
		</div>
	</section>
{/if}
