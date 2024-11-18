<script>
	import { onMount } from 'svelte';
	import { scale, fade } from 'svelte/transition';
	import Connect from './Connect.svelte';
	import Projects from './Projects.svelte';

	let trans = false;
	let hello = '';
	let sarthak = '';
	let showCursor = true;

	function typewriter() {
		if (hello.length !== "Hello, I'm".length) {
			hello += "Hello, I'm".at(hello.length);
			setTimeout(typewriter, 50);
		} else if (sarthak.length !== 'Sarthak'.length) {
			sarthak += 'Sarthak'.at(sarthak.length);
			setTimeout(typewriter, 50);
		} else {
			toggleCursor();
		}
	}

	function toggleCursor() {
		showCursor = !showCursor;
		setTimeout(toggleCursor, 500);
	}

	onMount(() => {
		trans = true;
		typewriter();
	});
</script>

<svelte:head>
	<title>/home/externref</title>
	<meta content="externref.tech" property="og:title" />
	<meta content="personal portfolio and blog." property="og:description" />
	<meta content="/" property="og:url" />
	<meta content="https://i.imgur.com/yMOAhdj.png" property="og:image" />
	<meta content="#c2a3d6" data-react-helmet="true" name="theme-color" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>
{#if trans}
	<div transition:fade={{ duration: 1000 }} id="info" class="md:flex font-exo2">
		<div class="">
			<div class="flex text-4xl text-center">
				<div class="">{hello}</div>
				<div class="text-[#4d557d]">&nbsp;{sarthak}</div>
				<div class={`ml-2 leading-none ${showCursor ? 'animate-blink' : ''}`}>|</div>
			</div>
			<div class="mt-3 ml-1 text-base">
				Programming nerd deeply invested into learning backends, CLIs, APIs, Desktop applications
				and working of Operating systems. I'm interested in low level languages and the UNIX
				development environments, however, open to all new technologies. I'm driven by a love for
				problem-solving and crafting elegant, maintainable code. Whether working on personal
				projects or collaborating with others, I approach each challenge with enthusiasm and a
				relentless pursuit of excellence, always seeking to expand my skills and contribute to
				innovative software solutions.
				<i class="text-[#1A1A1D] hover:text-[#4d557d]">I use Arch btw</i>
			</div>
			<div class="mt-4 text-sm md:text-lg">
				<a href="#projects"
					><button class="bg-[#4d557d] hover:bg-[#3e4254] m-1 px-2 py-1 rounded-sm">
						<i class="bi bi-braces"></i> Projects</button
					></a
				>
				<a href="#connect">
					<button class="bg-[#4d557d] hover:bg-[#3e4254] m-1 px-2 py-1 rounded-sm"
						><i class="bi bi-person-raised-hand"></i> Connect</button
					></a
				><a href="https://yap.externref.tech"
					><button class="bg-[#4d557d] hover:bg-[#3e4254] m-1 px-2 py-1 rounded-sm"
						><i class="bi bi-megaphone-fill"></i> Blogs</button
					></a
				><a href="https://github.com/externref"
					><button class="bg-[#4d557d] hover:bg-[#3e4254] m-1 px-2 py-1 rounded-sm"
						><i class="bi bi-github"></i> Github</button
					>
				</a>
			</div>
		</div>

		<img
			transition:scale={{ duration: 1000 }}
			src="/site_banner.png"
			alt="site banner"
			class="md:w-[400px]"
		/>
	</div>
{/if}
<Projects />
<Connect />

<style>
	@keyframes blink {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	.animate-blink {
		animation: blink 0.5s infinite;
	}
</style>
