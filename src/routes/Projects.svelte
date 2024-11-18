<script lang="ts">
	import { onMount } from 'svelte';
	import { scale } from 'svelte/transition';
	import Cursorphobic from 'svelte-cursorphobic';
	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';
	let trans = false;
	let carousel;
	onMount(() => {
		trans = true;
	});

	const projects = {
		space: {
			image: '/projects/space.png',
			desc: `space/peanuts is a JSON based data management system written in rust.`,
			github: `https://github.com/externref/space`,
			docs: `https://peanuts.externref.tech`
		},
		dotfiles: {
			image: '/projects/dotfiles.png',
			desc: `My linux configuration files`,
			github: `https://github.com/externref/dotfiles`,
			docs: ''
		},
		wyvern: {
			image: '/projects/wyvern.png',
			desc: `A flexible discord API wrapper written in python`,
			github: `https://github.com/externref/wyvern`,
			docs: `https://wyvern.readthedocs.io/en/latest/`
		},
		aoi: {
			image: '/projects/aoi.png',
			desc: `SQL CLI for quick database access`,
			github: `https://github.com/externref/aoi`,
			docs: `https://pypi.org/project/aoi`
		},
		pinaka: {
			image: '/projects/pinaka.png',
			desc: `an API for querying sanatana texts like gita, ramcharitmanas, etc ... `,
			github: `https://github.com/externref/pinaka`,
			docs: ` externref.github.io/pinaka/ `
		}
	};
</script>

{#if browser && trans}
	<div class="text-4xl md:text-5xl font-exo2">
		My <span id="projects" class="text-[#4d557d]">Projects</span>
	</div>
	<div class="m-2 font-exo2">Some of my open source projects (that i never completed)</div>
	<div transition:scale={{ duration: 1000 }} class="hidden md:block">
		<Carousel
			bind:this={carousel}
			autoplay={true}
			autoplayProgressVisible={true}
			autoplayTimeout={3000}
			pauseOnFocus={true}
			particlesToShow="3"
			infinite="false"
		>
			{#each Object.entries(projects) as [name, data]}
				<Cursorphobic>
					<div class="mx-2 p-2 rounded-md bg-[#4d557d] w-[400px] h-[250px] my-5">
						<div class="flex">
							<img
								src={data.image}
								alt={name}
								class="w-[200px] rounded-sm border-[#3e4254] border"
							/>
							<div>
								<div class="m-2"><p class="text-xl font-exo2">{name}</p></div>
								<div class="flex ml-2 text-sm">
									<a href={data.github}><i class="bi bi-github"></i></a>
									&nbsp;<a href={data.docs}><i class="bi bi-browser-chrome"></i></a>
								</div>
							</div>
						</div>
						<div class="h-1 bg-white rounded m-2"></div>
						<div>{data.desc}</div>
					</div></Cursorphobic
				>
			{/each}
		</Carousel>
	</div>
	<div transition:scale={{ duration: 1000 }} class="block md:hidden">
		<Carousel
			bind:this={carousel}
			autoplay={true}
			autoplayProgressVisible={true}
			autoplayTimeout={3000}
			particlesToShow="1"
			infinite="false"
		>
			{#each Object.entries(projects) as [name, data]}
				<Cursorphobic>
					<div class="mx-2 p-2 rounded-md bg-[#4d557d] w-[400px] h-[250px] my-5">
						<div class="flex">
							<img
								src={data.image}
								alt={name}
								class="w-[200px] rounded-sm border-[#3e4254] border"
							/>
							<div>
								<div class="m-2"><p class="text-xl font-exo2">{name}</p></div>
								<div class="flex ml-2 text-sm">
									<a href={data.github}><i class="bi bi-github"></i></a>
									&nbsp;<a href={data.docs}><i class="bi bi-browser-chrome"></i></a>
								</div>
							</div>
						</div>
						<div class="h-1 bg-white rounded m-2"></div>
						<div>{data.desc}</div>
					</div></Cursorphobic
				>
			{/each}
		</Carousel>
	</div>
{/if}
