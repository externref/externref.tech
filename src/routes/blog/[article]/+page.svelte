<script lang="ts">
	// @ts-nocheck

	import { marked } from 'marked';
	export let data: { content: string };
</script>

<div class="font-segoe sm:mx-3 lg:mx-72 items-center">
	<blog class="lg:text-xl">
		{@html marked(data.content)}
	</blog>
</div>

<svelte:head>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/prism.js"></script>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/themes/prism-twilight.min.css"
		integrity="sha512-6rkEt5SymQMcnlRz1dHwAMSfMnDaFX28qdr3wyaa+XRCR8dTSWE4U6vjiTVuB6Mq9FgYOLVOTk0lrOeCnodcgA=="
		crossorigin="anonymous"
		referrerpolicy="no-referrer"
	/>
</svelte:head>

<style>
	:global(blog img) {
		border-radius: 25px;
		@apply my-3;
	}
	:global(blog h1) {
		font-family: 'font-exo2', sans-serif;
		@apply mt-6 mb-5 text-5xl text-[#c5c6c7];
	}
	:global(blog h2) {
		font-family: 'font-exo2', sans-serif;
		@apply mt-4 mb-5 text-4xl text-[#c5c6c7];
	}
	:global(blog h3) {
		font-family: 'font-exo2', sans-serif;
		@apply mt-4 mb-3 text-2xl  text-[#c5c6c7];
	}
	/* :global(code.language-py){
		font-family: 'font-kode', sans-serif;
		display:block;
		@apply my-3 rounded p-4 border-red-100 bg-gray-600;
	} */
</style>
