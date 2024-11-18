<script lang="ts">
	import { onMount } from 'svelte';

	let header = '';
	function typewriter() {
		if (header.length != 'externref_'.length) {
			header += 'externref_'.at(header.length);
			setTimeout(typewriter, 100);
		}
	}
	onMount(() => {
		typewriter();
	});
</script>

<nav class="sticky">
	<a href="/" class="m-5 flex justify-center">
		<img src="/e_logo.png" width="30" alt="externref logo" />&nbsp;&nbsp;
		<div class="text-2xl font-exo2">{header}</div>
	</a>
</nav>
