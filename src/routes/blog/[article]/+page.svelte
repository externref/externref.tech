<script lang="ts">
	import { marked } from 'marked';
	export let data: { content: string };
</script>

<div class="font-segoe sm:mx-3 md:mx-24">
	{@html marked(data.content).replace('img', `img class="rounded"`)}
</div>
