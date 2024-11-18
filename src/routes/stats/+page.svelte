<script lang="ts">
	import { onMount } from 'svelte';
	import { scale } from 'svelte/transition';

	let transition: boolean = false;
	let load = 0;
	onMount(() => {
		transition = true;
	});
</script>

{#if transition}
	<div class="text-[#45A29E]">
		<div
			transition:scale={{ duration: 1000 }}
			class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16"
		>
			<h1 class="text-4xl font-exo2">Programming languages</h1>

			<img
				on:load={() => load++}
				class="hidden lg:block mt-4"
				alt="languages"
				src="https://wakatime.com/share/@externref/ababa2b4-bf12-454e-8ddc-003c49984f31.svg"
			/>
			<img
				class="block lg:hidden mt-4"
				alt="languages (graph)"
				src="https://wakatime.com/share/@externref/2de229d9-b494-4666-888c-a225c1108880.svg"
			/>
		</div>

		{#if load > 0}
			<div
				transition:scale={{ delay: 1000, duration: 1000 }}
				class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16"
			>
				<h1 class="text-4xl font-exo2">Code Editors and IDEs</h1>

				<img
					on:load={() => load++}
					class="mt-4"
					alt="editors"
					src="https://wakatime.com/share/@externref/324beed8-4f6d-4414-8732-1471222a9285.svg"
				/>
			</div>
		{/if}
		{#if load > 1}
			<div
				transition:scale={{ delay: 1000, duration: 1000 }}
				class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16"
			>
				<h1 class="text-4xl font-exo2 hidden lg:block">All time activity Heat map</h1>
				<h1 class="text-4xl font-exo2 block lg:hidden">All time activity</h1>
				<img
					alt="activity graph"
					class="hidden lg:block mt-4"
					src="https://wakatime.com/share/@externref/c9971b22-0897-4503-9515-7218b65c9f2e.svg"
				/>
				<img
					alt="activity graph pie"
					class="block lg:hidden mt-4"
					src="https://wakatime.com/share/@externref/a9f38fda-2bd1-4036-8b35-db6291091b11.svg"
				/>
			</div>
		{/if}
	</div>
{/if}
