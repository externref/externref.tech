<script>
	import '../app.css';
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
</script>

<Header />
<div class="m-4 min-h-screen mt-24">
	<slot />
</div>
<Footer />
