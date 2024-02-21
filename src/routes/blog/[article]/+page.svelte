<script lang="ts">
	import { marked } from 'marked';
	export let data: { content: string };
</script>

<div class="font-exo2 sm:mx-3 md:mx-24">
	{@html marked(data.content)}
</div>

<style>
	img {
		border-radius: 0.25rem;
	}
</style>
