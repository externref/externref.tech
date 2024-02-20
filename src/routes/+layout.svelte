<script>
	import '../app.css';
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
</script>
<Header></Header>
<div class="m-4 flex flex-col min-h-screen">
	<slot />
</div>
<Footer></Footer>

